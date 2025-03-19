# EventsFilter


## Supported Types

### `components.EventsFilterCondition`

```typescript
const value: components.EventsFilterCondition = {
  condition: {
    field: "conversationId",
    operator: "jsonContainedBy",
    value: [
      "<value>",
    ],
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

