# EventsFilter


## Supported Types

### `components.EventsFilterCondition`

```typescript
const value: components.EventsFilterCondition = {
  condition: {
    field: "createdAt",
    operator: "arrayContains",
    value: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

### `components.EventsFilterAND`

```typescript
const value: components.EventsFilterAND = {
  and: [
    {
      or: [],
    },
  ],
};
```

### `components.EventsFilterOR`

```typescript
const value: components.EventsFilterOR = {
  or: [],
};
```

