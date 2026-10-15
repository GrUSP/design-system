Promotes a single GrUSP event with its sub-brand accent — the flagship component for the conference line-up.

```jsx
<ConferenceCard
  name="reactjsday"
  edition="13th edition"
  date="23–24 Oct 2026"
  location="Verona, IT"
  description="Two days on React and the modern frontend."
  accent="var(--c-reactjsday)"
  status="CFP open"
/>
```

Pass each event's `accent` (use the `--c-*` conference tokens) and an optional `status` pill ("CFP open", "Sold out", "Tickets live"). Set `interactive={false}` for static listings.
