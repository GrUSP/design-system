import React from "react";

/* GrUSP IconButton — square/circle control for a single glyph. */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-iconbtn{
    --_bg:transparent; --_fg:var(--grusp-black); --_bd:transparent;
    display:inline-flex; align-items:center; justify-content:center;
    background:var(--_bg); color:var(--_fg); border:var(--border-base) solid var(--_bd);
    cursor:pointer; padding:0; transition:background var(--dur-base) var(--ease-out),
      transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
    -webkit-tap-highlight-color:transparent;
  }
  .gr-iconbtn svg{ width:1.25em; height:1.25em; display:block; }
  .gr-iconbtn:focus-visible{ outline:none; box-shadow:var(--ring); }
  .gr-iconbtn:active{ transform:scale(.92); }
  .gr-iconbtn[disabled]{ opacity:.4; cursor:not-allowed; pointer-events:none; }
  .gr-iconbtn--sm{ width:32px; height:32px; font-size:15px; border-radius:var(--radius-sm); }
  .gr-iconbtn--md{ width:42px; height:42px; font-size:18px; border-radius:var(--radius-md); }
  .gr-iconbtn--lg{ width:52px; height:52px; font-size:22px; border-radius:var(--radius-md); }
  .gr-iconbtn--circle{ border-radius:var(--radius-circle); }

  .gr-iconbtn--soft{ --_bg:var(--ink-100); }
  .gr-iconbtn--soft:hover{ --_bg:var(--ink-200); }
  .gr-iconbtn--solid{ --_bg:var(--grusp-black); --_fg:#fff; }
  .gr-iconbtn--solid:hover{ --_bg:var(--grusp-purple-deep); }
  .gr-iconbtn--accent{ --_bg:var(--grusp-yellow); --_fg:var(--grusp-black); }
  .gr-iconbtn--accent:hover{ --_bg:var(--grusp-yellow-deep); }
  .gr-iconbtn--outline{ --_bd:var(--grusp-black); box-shadow:var(--offset-sm); }
  .gr-iconbtn--outline:hover{ transform:translate(-1px,-1px); box-shadow:var(--offset-md); }
  .gr-iconbtn--ghost{ --_bg:transparent; }
  .gr-iconbtn--ghost:hover{ --_bg:var(--ink-100); }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "iconbutton");
  el.textContent = css;
  document.head.appendChild(el);
}

export function IconButton({
  children,
  label,
  variant = "soft",
  size = "md",
  circle = false,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = [
    "gr-iconbtn",
    `gr-iconbtn--${variant}`,
    `gr-iconbtn--${size}`,
    circle ? "gr-iconbtn--circle" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
