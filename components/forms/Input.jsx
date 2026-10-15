import React from "react";

/* GrUSP Input — text field with label, hint and error states. */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
  .gr-field__label{ font-weight:700; font-size:13.5px; color:var(--text-strong); }
  .gr-field__req{ color:var(--danger); margin-left:2px; }
  .gr-field__control{ position:relative; display:flex; align-items:center; }
  .gr-field__icon{ position:absolute; left:13px; display:inline-flex; color:var(--ink-400); pointer-events:none; font-size:16px; }
  .gr-input{
    width:100%; font-family:var(--font-body); font-size:15px; color:var(--text-body);
    background:#fff; border:var(--border-base) solid var(--grusp-black);
    border-radius:var(--radius-md); padding:11px 14px; outline:none;
    transition:box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
  }
  .gr-input::placeholder{ color:var(--ink-400); }
  .gr-input--icon{ padding-left:38px; }
  .gr-input:focus{ box-shadow:var(--ring); }
  .gr-input:disabled{ background:var(--ink-100); color:var(--ink-500); cursor:not-allowed; }
  .gr-field--error .gr-input{ border-color:var(--danger); }
  .gr-field--error .gr-input:focus{ box-shadow:0 0 0 3px var(--danger-soft); }
  .gr-field__hint{ font-size:12.5px; color:var(--text-subtle); }
  .gr-field--error .gr-field__hint{ color:var(--danger); }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "input");
  el.textContent = css;
  document.head.appendChild(el);
}

let uid = 0;
export function Input({
  label = null,
  hint = null,
  error = null,
  required = false,
  icon = null,
  id = null,
  className = "",
  ...rest
}) {
  useStyles();
  const fieldId = React.useMemo(() => id || `gr-input-${++uid}`, [id]);
  const isErr = !!error;
  return (
    <div className={["gr-field", isErr ? "gr-field--error" : "", className].filter(Boolean).join(" ")}>
      {label ? (
        <label className="gr-field__label" htmlFor={fieldId}>
          {label}{required ? <span className="gr-field__req">*</span> : null}
        </label>
      ) : null}
      <div className="gr-field__control">
        {icon ? <span className="gr-field__icon">{icon}</span> : null}
        <input id={fieldId} className={["gr-input", icon ? "gr-input--icon" : ""].filter(Boolean).join(" ")} {...rest} />
      </div>
      {(hint || error) ? <span className="gr-field__hint">{error || hint}</span> : null}
    </div>
  );
}
