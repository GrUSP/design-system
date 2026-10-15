A topic / filter chip with the brand's keyline outline — interest areas, conference tracks, removable selections.

```jsx
<Tag color="var(--c-vueday)">JavaScript</Tag>
<Tag onClick={toggle} selected={on}>DevOps</Tag>
<Tag onRemove={() => drop(id)}>PHP</Tag>
```

Pass `onClick` to make it filterable (hover turns yellow), `selected` for the filled active state, `onRemove` for a removable "×", and `color` for a leading accent dot.
