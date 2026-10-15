The primary GrUSP action control — a bold, rounded button with a Grota Rounded label; reach for it on any call to action.

```jsx
<Button variant="primary" size="md" onClick={go}>Take part</Button>
<Button variant="accent" iconRight={<span>→</span>}>Become a speaker</Button>
<Button variant="secondary">Read the CoC</Button>
<Button variant="ghost" size="sm">Skip</Button>
```

Variants: `primary` (black), `accent` (yellow / high-energy CTA), `secondary` (white with the signature black keyline + hard offset shadow), `ghost` (text-only purple). Sizes: `sm` · `md` · `lg`. Props: `block` for full width, `iconLeft` / `iconRight` for icons, `as="a"` to render a link.
