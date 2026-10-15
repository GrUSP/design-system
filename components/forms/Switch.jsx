import React from "react";

/* GrUSP Switch — on/off toggle with the brand keyline. */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const css = `
  .gr-switch{ display:inline-flex; align-items:center; gap:10px; cursor:pointer;
    font-family:var(--font-body); font-weight:600; font-size:14px; color:var(--text-body);
    -webkit-tap-highlight-color:transparent; }
  .gr-switch input{ position:absolute; opacity:0; width:0; height:0; }
  .gr-switch__track{
    position:relative; width:46px; height:27px; flex:none;
    background:#fff; border:var(--border-base) solid var(--grusp-black);
    border-radius:var(--radius-pill); transition:background var(--dur-base) var(--ease-out);
  }
  .gr-switch__thumb{
    position:absolute; top:50%; left:3px; transform:translateY(-50%);
    width:17px; height:17px; border-radius:50%; background:var(--grusp-black);
    transition:left var(--dur-base) var(--ease-pop), background var(--dur-base) var(--ease-out);
  }
  .gr-switch input:checked + .gr-switch__track{ background:var(--grusp-yellow); }
  .gr-switch input:checked + .gr-switch__track .gr-switch__thumb{ left:22px; }
  .gr-switch input:focus-visible + .gr-switch__track{ box-shadow:var(--ring); }
  .gr-switch--disabled{ opacity:.45; cursor:not-allowed; }
  `;
  const el = document.createElement("style");
  el.setAttribute("data-gr", "switch");
  el.textContent = css;
  document.head.appendChild(el);
}

export function Switch({
  checked,
  defaultChecked,
  onChange,
  label = null,
  disabled = false,
  className = "",
  ...rest
}) {
  useStyles();
  return (
    <label className={["gr-switch", disabled ? "gr-switch--disabled" : "", className].filter(Boolean).join(" ")}>
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <span className="gr-switch__track"><span className="gr-switch__thumb" /></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
