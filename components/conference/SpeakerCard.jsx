import React from "react";
import { Avatar } from "../core/Avatar.jsx";

/* GrUSP SpeakerCard — speaker portrait, name, role and talk title. */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-speaker{
    display:flex; flex-direction:column; gap:var(--space-4);
    background:#fff; border:var(--border-base) solid var(--grusp-black);
    border-radius:var(--radius-lg); padding:var(--space-5); box-shadow:var(--offset-sm);
    transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }
  .gr-speaker--interactive{ cursor:pointer; }
  .gr-speaker--interactive:hover{ transform:translate(-2px,-2px); box-shadow:var(--offset-md); }
  .gr-speaker__head{ display:flex; align-items:center; gap:var(--space-4); }
  .gr-speaker__id{ display:flex; flex-direction:column; gap:2px; min-width:0; }
  .gr-speaker__name{ font-family:var(--font-display); font-weight:800; font-size:18px;
    color:var(--text-strong); line-height:1.1; }
  .gr-speaker__role{ font-size:13px; color:var(--text-muted); font-weight:600;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .gr-speaker__talk{ font-size:14px; line-height:1.45; color:var(--text-body); margin:0;
    padding-top:var(--space-4); border-top:1px solid var(--border-muted); }
  .gr-speaker__talk b{ display:block; font-family:var(--font-mono); font-weight:700; font-size:10px;
    text-transform:uppercase; letter-spacing:.12em; color:var(--text-subtle); margin-bottom:4px; }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "speakercard");
  el.textContent = css;
  document.head.appendChild(el);
}

export function SpeakerCard({
  name,
  role = null,
  company = null,
  photo = null,
  talk = null,
  interactive = false,
  className = "",
  ...rest
}) {
  useStyles();
  const sub = [role, company].filter(Boolean).join(" · ");
  return (
    <div className={["gr-speaker", interactive ? "gr-speaker--interactive" : "", className].filter(Boolean).join(" ")} {...rest}>
      <div className="gr-speaker__head">
        <Avatar src={photo} name={name} size="lg" ring />
        <div className="gr-speaker__id">
          <span className="gr-speaker__name">{name}</span>
          {sub ? <span className="gr-speaker__role">{sub}</span> : null}
        </div>
      </div>
      {talk ? <p className="gr-speaker__talk"><b>Talk</b>{talk}</p> : null}
    </div>
  );
}
