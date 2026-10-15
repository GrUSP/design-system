A flexible content container. Compose it from the `Card.Body`, `Card.Title` and `Card.Footer` slots.

```jsx
<Card variant="poster" interactive>
  <Card.Body>
    <Card.Title>jsday 2026</Card.Title>
    <p>Two days of JavaScript in Verona.</p>
  </Card.Body>
  <Card.Footer><Badge variant="accent">CFP open</Badge></Card.Footer>
</Card>
```

Variants: `plain` (soft shadow), `poster` (black keyline + hard offset — the brand signature), `brand` (purple), `dark` (black). Add `interactive` for hover lift on clickable cards.
