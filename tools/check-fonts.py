#!/usr/bin/env python3
"""Verifica che ogni @font-face di tokens/fonts.css punti a un file esistente
il cui name table (family/style) e OS/2 (peso, corsivo) coincidano con quanto
dichiarato. Segnala anche file font non validi (es. AppleDouble da 299 byte).
Uso: python3 tools/check-fonts.py   (richiede fontTools; brotli per i .woff2)"""
import re, sys, pathlib
from fontTools.ttLib import TTFont
root = pathlib.Path(__file__).resolve().parent.parent
css = (root / "tokens/fonts.css").read_text()
STYLE_W = {"thin":100,"extralight":200,"light":300,"regular":400,"italic":400,"medium":500,"semibold":600,
           "bold":700,"extrabold":800,"extrabld":800,"black":900}
def real(path):
    f = TTFont(path); n = f["name"]; o = f["OS/2"]
    fam = n.getDebugName(16) or n.getDebugName(1)
    sub = n.getDebugName(17) or n.getDebugName(2)
    ps = n.getDebugName(6) or ""
    if fam.startswith("Proxima Nova Cn") or "Cond" in ps: fam = "Proxima Nova Condensed"
    elif fam.startswith("Proxima Nova"): fam = "Proxima Nova"
    return fam, sub, o.usWeightClass, bool(o.fsSelection & 1), "fvar" in f
errors = 0; checked = 0
for m in re.finditer(r"@font-face\s*\{(.*?)\}", css, re.S):
    b = m.group(1)
    fam = re.search(r'font-family:\s*"([^"]+)"', b).group(1)
    style = re.search(r"font-style:\s*(\w+)", b).group(1)
    weight = int(re.search(r"font-weight:\s*(\d+)", b).group(1))
    src = re.search(r'url\("([^"]+)"\)', b).group(1)
    p = (root / "tokens" / src).resolve()
    checked += 1
    if not p.is_file(): print(f"ERRORE {src}: file mancante"); errors += 1; continue
    try: rfam, rsub, rw, rit, var = real(p)
    except Exception as e: print(f"ERRORE {src}: font non valido ({type(e).__name__}, {p.stat().st_size} byte)"); errors += 1; continue
    ok = rfam == fam and (var or rw == weight) and (rit == (style == "italic"))
    print(("OK     " if ok else "ERRORE ") + f"{src:52} dichiarato {fam} {weight} {style:6} | reale {rfam} / {rsub} / {rw}{' italic' if rit else ''}{' (variabile)' if var else ''}")
    errors += (not ok)
# ogni file in assets/fonts deve essere un font valido
for p in sorted((root / "assets/fonts").iterdir()):
    if p.name.startswith("."): continue
    try: TTFont(p)
    except Exception as e: print(f"ERRORE {p.name}: non e' un font valido"); errors += 1
    if p.name.startswith("._") or p.stat().st_size < 1000: print(f"ERRORE {p.name}: sospetto resource fork"); errors += 1
print(f"\n{checked} @font-face verificati, {errors} errori")
sys.exit(1 if errors else 0)
