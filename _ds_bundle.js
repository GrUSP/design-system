/* @ds-bundle: {"format":4,"namespace":"GrUSPDesignSystem_705bf7","components":[{"name":"ConferenceCard","sourcePath":"components/conference/ConferenceCard.jsx"},{"name":"SpeakerCard","sourcePath":"components/conference/SpeakerCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/conference/ConferenceCard.jsx":"eb8644de3b0a","components/conference/SpeakerCard.jsx":"ecaf3afc5e53","components/core/Avatar.jsx":"9cfd8990cb73","components/core/Badge.jsx":"962a44556d2b","components/core/Button.jsx":"d6618b56bb13","components/core/Card.jsx":"c27e25d4a93d","components/core/IconButton.jsx":"af70ca1a17a8","components/core/Tag.jsx":"fc458629b7f1","components/forms/Input.jsx":"c4c869b2f797","components/forms/Switch.jsx":"0a936ff47107"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GrUSPDesignSystem_705bf7 = window.GrUSPDesignSystem_705bf7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/conference/ConferenceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const PinIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "2.5"
}));
const CalIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 9h18M8 3v4M16 3v4"
}));
function ConferenceCard({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["gr-conf", interactive ? "gr-conf--interactive" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "gr-conf__top",
    style: {
      "--_accent": accent
    }
  }, status ? /*#__PURE__*/React.createElement("span", {
    className: "gr-conf__badge"
  }, status) : null, edition ? /*#__PURE__*/React.createElement("span", {
    className: "gr-conf__edition"
  }, edition) : null, /*#__PURE__*/React.createElement("span", {
    className: "gr-conf__name"
  }, name)), /*#__PURE__*/React.createElement("div", {
    className: "gr-conf__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-conf__meta"
  }, date ? /*#__PURE__*/React.createElement("div", {
    className: "gr-conf__row"
  }, /*#__PURE__*/React.createElement(CalIcon, null), date) : null, location ? /*#__PURE__*/React.createElement("div", {
    className: "gr-conf__row"
  }, /*#__PURE__*/React.createElement(PinIcon, null), location) : null), description ? /*#__PURE__*/React.createElement("p", {
    className: "gr-conf__desc"
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    className: "gr-conf__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gr-conf__cta"
  }, cta, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")))));
}
Object.assign(__ds_scope, { ConferenceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/conference/ConferenceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
}
function Avatar({
  src = null,
  name = "",
  size = "md",
  shape = "circle",
  ring = false,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = ["gr-avatar", `gr-avatar--${size}`, shape === "square" ? "gr-avatar--square" : "", ring ? "gr-avatar--ring" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials(name)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/conference/SpeakerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SpeakerCard({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["gr-speaker", interactive ? "gr-speaker--interactive" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "gr-speaker__head"
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: photo,
    name: name,
    size: "lg",
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-speaker__id"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gr-speaker__name"
  }, name), sub ? /*#__PURE__*/React.createElement("span", {
    className: "gr-speaker__role"
  }, sub) : null)), talk ? /*#__PURE__*/React.createElement("p", {
    className: "gr-speaker__talk"
  }, /*#__PURE__*/React.createElement("b", null, "Talk"), talk) : null);
}
Object.assign(__ds_scope, { SpeakerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/conference/SpeakerCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  children,
  variant = "neutral",
  dot = false,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = ["gr-badge", `gr-badge--${variant}`, dot ? "gr-badge--dot" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ["gr-btn", `gr-btn--${variant}`, `gr-btn--${size}`, block ? "gr-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "gr-btn__icon"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "gr-btn__icon"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  children,
  variant = "plain",
  interactive = false,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = ["gr-card", `gr-card--${variant}`, interactive ? "gr-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Card.Body = function CardBody({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `gr-card__body ${className}`
  }, rest), children);
};
Card.Title = function CardTitle({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    className: `gr-card__title ${className}`
  }, rest), children);
};
Card.Footer = function CardFooter({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `gr-card__footer ${className}`
  }, rest), children);
};
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
  children,
  label,
  variant = "soft",
  size = "md",
  circle = false,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = ["gr-iconbtn", `gr-iconbtn--${variant}`, `gr-iconbtn--${size}`, circle ? "gr-iconbtn--circle" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Tag({
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
  const cls = ["gr-tag", clickable ? "gr-tag--clickable" : "", selected ? "gr-tag--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick
  }, rest), color ? /*#__PURE__*/React.createElement("span", {
    className: "gr-tag__dot",
    style: {
      background: color
    }
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gr-tag__x",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: ["gr-field", isErr ? "gr-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "gr-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "gr-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "gr-field__control"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "gr-field__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ["gr-input", icon ? "gr-input--icon" : ""].filter(Boolean).join(" ")
  }, rest))), hint || error ? /*#__PURE__*/React.createElement("span", {
    className: "gr-field__hint"
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Switch({
  checked,
  defaultChecked,
  onChange,
  label = null,
  disabled = false,
  className = "",
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["gr-switch", disabled ? "gr-switch--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "gr-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gr-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ConferenceCard = __ds_scope.ConferenceCard;

__ds_ns.SpeakerCard = __ds_scope.SpeakerCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
