import React from "react";

/* GrUSP Card — content container. Variants: plain · poster · brand · dark.
   Composable: Card, Card.Body, Card.Title, Card.Footer. */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-card{
    --_bg:#fff; --_fg:var(--text-body);
    background:var(--_bg); color:var(--_fg);
    border-radius:var(--radius-lg); overflow:hidden; position:relative;
    transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }
  .gr-card--plain{ border:1px solid var(--border-default); box-shadow:var(--shadow-sm); }
  .gr-card--poster{ border:var(--border-base) solid var(--grusp-black); box-shadow:var(--offset-md); }
  .gr-card--brand{ --_bg:var(--grusp-purple); --_fg:#fff; }
  .gr-card--dark{ --_bg:var(--grusp-black); --_fg:var(--text-on-ink); }
  .gr-card--interactive{ cursor:pointer; }
  .gr-card--interactive.gr-card--poster:hover{ transform:translate(-2px,-2px); box-shadow:var(--offset-lg); }
  .gr-card--interactive.gr-card--plain:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); }

  .gr-card__body{ padding:var(--space-5); }
  .gr-card__title{ font-family:var(--font-display); font-weight:800; font-size:20px;
    color:inherit; margin:0 0 6px; letter-spacing:var(--tracking-tight); }
  .gr-card__footer{ padding:var(--space-4) var(--space-5); display:flex; align-items:center;
    gap:var(--space-3); border-top:1px solid color-mix(in srgb, currentColor 14%, transparent); }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "card");
  el.textContent = css;
  document.head.appendChild(el);
}

export function Card({
  children,
  variant = "plain",
  interactive = false,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = [
    "gr-card",
    `gr-card--${variant}`,
    interactive ? "gr-card--interactive" : "",
    className,
  ].filter(Boolean).join(" ");
  return <div className={cls} {...rest}>{children}</div>;
}

Card.Body = function CardBody({ children, className = "", ...rest }) {
  return <div className={`gr-card__body ${className}`} {...rest}>{children}</div>;
};
Card.Title = function CardTitle({ children, className = "", ...rest }) {
  return <h3 className={`gr-card__title ${className}`} {...rest}>{children}</h3>;
};
Card.Footer = function CardFooter({ children, className = "", ...rest }) {
  return <div className={`gr-card__footer ${className}`} {...rest}>{children}</div>;
};
