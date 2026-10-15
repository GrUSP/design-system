import React from "react";

/* GrUSP Button — bold, rounded, with the brand's chunky-keyline option.
   Variants: primary (black) · accent (yellow) · secondary (outline) · ghost
   Sizes: sm · md · lg */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-btn{
    --_bg:var(--grusp-black); --_fg:#fff; --_bd:transparent;
    display:inline-flex; align-items:center; justify-content:center; gap:.55em;
    font-family:var(--font-display); font-weight:800; line-height:1;
    border:var(--border-base) solid var(--_bd); background:var(--_bg); color:var(--_fg);
    border-radius:var(--radius-pill); cursor:pointer; text-decoration:none; white-space:nowrap;
    transition:transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out),
               box-shadow var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out);
    -webkit-tap-highlight-color:transparent;
  }
  .gr-btn:focus-visible{ outline:none; box-shadow:var(--ring); }
  .gr-btn:active{ transform:translateY(1px) scale(.985); }
  .gr-btn[disabled]{ opacity:.45; cursor:not-allowed; pointer-events:none; }
  .gr-btn--sm{ font-size:13px; padding:8px 16px; }
  .gr-btn--md{ font-size:15px; padding:11px 22px; }
  .gr-btn--lg{ font-size:18px; padding:15px 30px; }
  .gr-btn--block{ display:flex; width:100%; }

  .gr-btn--primary{ --_bg:var(--grusp-black); --_fg:#fff; }
  .gr-btn--primary:hover{ --_bg:var(--grusp-purple-deep); }

  .gr-btn--accent{ --_bg:var(--grusp-yellow); --_fg:var(--grusp-black); }
  .gr-btn--accent:hover{ --_bg:var(--grusp-yellow-deep); }

  .gr-btn--secondary{ --_bg:#fff; --_fg:var(--grusp-black); --_bd:var(--grusp-black);
    box-shadow:var(--offset-sm); }
  .gr-btn--secondary:hover{ transform:translate(-1px,-1px); box-shadow:var(--offset-md); }
  .gr-btn--secondary:active{ transform:translate(1px,1px); box-shadow:1px 1px 0 var(--grusp-black); }

  .gr-btn--ghost{ --_bg:transparent; --_fg:var(--grusp-purple-deep); }
  .gr-btn--ghost:hover{ --_bg:var(--purple-50); }

  .gr-btn__icon{ display:inline-flex; font-size:1.15em; }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "button");
  el.textContent = css;
  document.head.appendChild(el);
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  className = "",
  ...rest
}) {
  useStyles();
  const Tag = as;
  const cls = [
    "gr-btn",
    `gr-btn--${variant}`,
    `gr-btn--${size}`,
    block ? "gr-btn--block" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <Tag className={cls} {...rest}>
      {iconLeft ? <span className="gr-btn__icon">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className="gr-btn__icon">{iconRight}</span> : null}
    </Tag>
  );
}
