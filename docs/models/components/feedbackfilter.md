# FeedbackFilter


## Supported Types

### `components.FeedbackFilterCondition`

```typescript
const value: components.FeedbackFilterCondition = {
  condition: {
    field: "userProperties",
    operator: "jsonHasKey",
    value: "<value>",
  },
};
```

### `components.FeedbackFilterAND`

```typescript
const value: components.FeedbackFilterAND = {
  and: [],
};
```

### `components.FeedbackFilterOR`

```typescript
const value: components.FeedbackFilterOR = {
  or: [
    {
      or: [],
    },
  ],
};
```

