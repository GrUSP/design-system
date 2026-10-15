import React from "react";

/* GrUSP Tag — topic chip (PHP, JavaScript, DevOps...). Optionally removable. */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-tag{
    display:inline-flex; align-items:center; gap:.45em;
    font-family:var(--font-body); font-weight:700; font-size:13px; line-height:1;
    padding:7px 13px; border-radius:var(--radius-pill);
    background:#fff; color:var(--grusp-black); border:1.5px solid var(--grusp-black);
    cursor:default; transition:background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
  }
  .gr-tag--clickable{ cursor:pointer; }
  .gr-tag--clickable:hover{ background:var(--grusp-yellow); }
  .gr-tag--selected{ background:var(--grusp-black); color:#fff; }
  .gr-tag--selected.gr-tag--clickable:hover{ background:var(--grusp-purple-deep); }
  .gr-tag__dot{ width:9px; height:9px; border-radius:50%; }
  .gr-tag__x{
    display:inline-flex; align-items:center; justify-content:center;
    width:16px; height:16px; border-radius:50%; border:none; background:transparent;
    color:inherit; cursor:pointer; font-size:14px; line-height:1; padding:0; margin-right:-3px;
  }
  .gr-tag__x:hover{ background:rgba(0,0,0,.12); }
  .gr-tag--selected .gr-tag__x:hover{ background:rgba(255,255,255,.22); }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "tag");
  el.textContent = css;
  document.head.appendChild(el);
}

export function Tag({
  children,
  color = null,
  selected = false,
  onClick = null,
  onRemove = null,
  className = "",
  ...rest
}) {
  useStyles();
  const clickable = !!onClick;
  const cls = [
    "gr-tag",
    clickable ? "gr-tag--clickable" : "",
    selected ? "gr-tag--selected" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} onClick={onClick} {...rest}>
      {color ? <span className="gr-tag__dot" style={{ background: color }} /> : null}
      {children}
      {onRemove ? (
        <button
          type="button"
          className="gr-tag__x"
          aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
        >×</button>
      ) : null}
    </span>
  );
}
