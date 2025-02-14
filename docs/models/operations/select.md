# Select


## Supported Types

### `components.ConversationsAggregationSelection`

```typescript
const value: components.ConversationsAggregationSelection = {
  type: "aggregation",
  aggregation: "count",
};
```

### `components.ConversationsTimeBasedGroupBySelection`

```typescript
const value: components.ConversationsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "week",
  field: "firstMessageTime",
};
```

### `components.ConversationsSimpleFieldSelection`

```typescript
const value: components.ConversationsSimpleFieldSelection = {
  type: "field",
  field: "integrationId",
};
```

