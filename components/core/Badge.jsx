import React from "react";

/* GrUSP Badge — small status / count pill. */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-badge{
    display:inline-flex; align-items:center; gap:.4em;
    font-family:var(--font-body); font-weight:700; font-size:12px; line-height:1;
    padding:5px 10px; border-radius:var(--radius-pill); white-space:nowrap;
    border:1.5px solid transparent;
  }
  .gr-badge--dot::before{ content:""; width:6px; height:6px; border-radius:50%; background:currentColor; }
  .gr-badge--neutral{ background:var(--ink-100); color:var(--ink-700); }
  .gr-badge--solid{ background:var(--grusp-black); color:#fff; }
  .gr-badge--accent{ background:var(--grusp-yellow); color:var(--grusp-black); }
  .gr-badge--purple{ background:var(--purple-100); color:var(--grusp-purple-deep); }
  .gr-badge--success{ background:var(--success-soft); color:#1f7d51; }
  .gr-badge--warning{ background:var(--warning-soft); color:#9a7400; }
  .gr-badge--danger{ background:var(--danger-soft); color:#b23a35; }
  .gr-badge--outline{ background:transparent; color:var(--grusp-black); border-color:var(--grusp-black); }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "badge");
  el.textContent = css;
  document.head.appendChild(el);
}

export function Badge({ children, variant = "neutral", dot = false, className = "", ...rest }) {
  useStyles();
  const cls = [
    "gr-badge",
    `gr-badge--${variant}`,
    dot ? "gr-badge--dot" : "",
    className,
  ].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{children}</span>;
}
