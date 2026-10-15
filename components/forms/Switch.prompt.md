An on/off toggle with the brand keyline; the track fills yellow when on.

```jsx
<Switch label="Send me the JavaScript newsletter" defaultChecked />
<Switch checked={live} onChange={e => setLive(e.target.checked)} label="Live captions" />
```

Works controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`). Pass `label` for an inline label, `disabled` to lock it.
