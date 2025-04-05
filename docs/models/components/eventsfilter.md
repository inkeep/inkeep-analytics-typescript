# EventsFilter


## Supported Types

### `components.EventsFilterCondition`

```typescript
const value: components.EventsFilterCondition = {
  condition: {
    field: "createdAt",
    operator: "notIn",
    value: {
      "key": "<value>",
    },
  },
};
```

### `components.EventsFilterAND`

```typescript
const value: components.EventsFilterAND = {
  and: [],
};
```

### `components.EventsFilterOR`

```typescript
const value: components.EventsFilterOR = {
  or: [],
};
```

