import React from "react";

/* GrUSP Avatar — speaker / member portrait with initials fallback. */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-avatar{
    display:inline-flex; align-items:center; justify-content:center;
    position:relative; flex:none; overflow:hidden;
    background:var(--purple-200); color:var(--grusp-purple-deep);
    font-family:var(--font-display); font-weight:800; line-height:1;
    border-radius:var(--radius-circle);
  }
  .gr-avatar--ring{ border:var(--border-bold) solid var(--grusp-black); }
  .gr-avatar--square{ border-radius:var(--radius-md); }
  .gr-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
  .gr-avatar--xs{ width:28px; height:28px; font-size:11px; }
  .gr-avatar--sm{ width:38px; height:38px; font-size:14px; }
  .gr-avatar--md{ width:52px; height:52px; font-size:18px; }
  .gr-avatar--lg{ width:72px; height:72px; font-size:24px; }
  .gr-avatar--xl{ width:104px; height:104px; font-size:34px; }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "avatar");
  el.textContent = css;
  document.head.appendChild(el);
}

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
}

export function Avatar({
  src = null,
  name = "",
  size = "md",
  shape = "circle",
  ring = false,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = [
    "gr-avatar",
    `gr-avatar--${size}`,
    shape === "square" ? "gr-avatar--square" : "",
    ring ? "gr-avatar--ring" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {src ? <img src={src} alt={name} /> : <span>{initials(name)}</span>}
    </span>
  );
}
