# Select


## Supported Types

### `components.ConversationsAggregationSelection`

```typescript
const value: components.ConversationsAggregationSelection = {
  type: "aggregation",
  aggregation: "avg",
};
```

### `components.ConversationsTimeBasedGroupBySelection`

```typescript
const value: components.ConversationsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
  field: "integrationId",
};
```

### `components.ConversationsSimpleFieldSelection`

```typescript
const value: components.ConversationsSimpleFieldSelection = {
  type: "field",
  field: "type",
};
```

