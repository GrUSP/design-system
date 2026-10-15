A labelled text field with the brand's black keyline, plus hint and error states.

```jsx
<Input label="Email address" required type="email" placeholder="you@dev.it" />
<Input label="Name" hint="As it appears on your badge" />
<Input label="Email" error="That doesn't look like an email" defaultValue="nope" />
<Input icon={<MailIcon/>} placeholder="Search talks…" />
```

Props: `label`, `hint`, `error` (switches to error state), `required`, `icon`. All native `<input>` attributes pass through.
