import React from "react";

/* GrUSP ConferenceCard — promotes a single event with its sub-brand accent. */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-conf{
    position:relative; display:flex; flex-direction:column;
    background:#fff; color:var(--text-body); border:var(--border-base) solid var(--grusp-black);
    border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--offset-md);
    transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }
  .gr-conf--interactive{ cursor:pointer; }
  .gr-conf--interactive:hover{ transform:translate(-2px,-2px); box-shadow:var(--offset-lg); }
  .gr-conf__top{
    --_accent:var(--grusp-purple);
    background:var(--_accent); color:#fff; padding:var(--space-5);
    display:flex; flex-direction:column; gap:4px; min-height:96px; justify-content:flex-end;
    position:relative;
  }
  .gr-conf__edition{ font-family:var(--font-mono); font-weight:700; font-size:11px;
    letter-spacing:.12em; text-transform:uppercase; opacity:.85; }
  .gr-conf__name{ font-family:var(--font-display); font-weight:900; font-size:30px;
    line-height:1; letter-spacing:var(--tracking-tight); }
  .gr-conf__badge{ position:absolute; top:var(--space-4); right:var(--space-4);
    background:var(--grusp-yellow); color:var(--grusp-black);
    font-family:var(--font-body); font-weight:800; font-size:11px; letter-spacing:.04em;
    padding:5px 10px; border-radius:var(--radius-pill); border:1.5px solid var(--grusp-black); }
  .gr-conf__body{ padding:var(--space-5); display:flex; flex-direction:column; gap:var(--space-4); flex:1; }
  .gr-conf__meta{ display:flex; flex-direction:column; gap:8px; }
  .gr-conf__row{ display:flex; align-items:center; gap:9px; font-size:14px; font-weight:600; color:var(--text-body); }
  .gr-conf__row svg{ width:17px; height:17px; flex:none; color:var(--grusp-purple-deep); }
  .gr-conf__desc{ font-size:14px; line-height:1.5; color:var(--text-muted); margin:0; }
  .gr-conf__foot{ display:flex; align-items:center; justify-content:space-between; gap:var(--space-3);
    margin-top:auto; }
  .gr-conf__cta{ font-family:var(--font-display); font-weight:800; font-size:14px;
    color:var(--grusp-black); display:inline-flex; align-items:center; gap:6px; }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "conferencecard");
  el.textContent = css;
  document.head.appendChild(el);
}

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" />
  </svg>
);
const CalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

export function ConferenceCard({
  name,
  edition = null,
  date = null,
  location = null,
  description = null,
  accent = "var(--grusp-purple)",
  status = null,
  cta = "Discover more",
  interactive = true,
  className = "",
  ...rest
}) {
  useStyles();
  return (
    <div className={["gr-conf", interactive ? "gr-conf--interactive" : "", className].filter(Boolean).join(" ")} {...rest}>
      <div className="gr-conf__top" style={{ "--_accent": accent }}>
        {status ? <span className="gr-conf__badge">{status}</span> : null}
        {edition ? <span className="gr-conf__edition">{edition}</span> : null}
        <span className="gr-conf__name">{name}</span>
      </div>
      <div className="gr-conf__body">
        <div className="gr-conf__meta">
          {date ? <div className="gr-conf__row"><CalIcon />{date}</div> : null}
          {location ? <div className="gr-conf__row"><PinIcon />{location}</div> : null}
        </div>
        {description ? <p className="gr-conf__desc">{description}</p> : null}
        <div className="gr-conf__foot">
          <span className="gr-conf__cta">{cta} <span aria-hidden="true">→</span></span>
        </div>
      </div>
    </div>
  );
}
