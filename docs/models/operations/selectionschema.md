# SelectionSchema


## Supported Types

### `components.ConversationsAggregationSelection`

```typescript
const value: components.ConversationsAggregationSelection = {
  type: "aggregation",
  aggregation: "sum",
};
```

### `components.ConversationsTimeBasedGroupBySelection`

```typescript
const value: components.ConversationsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "month",
  field: "integrationId",
};
```

### `components.ConversationsSimpleFieldSelection`

```typescript
const value: components.ConversationsSimpleFieldSelection = {
  type: "field",
  field: "firstMessageTime",
};
```

