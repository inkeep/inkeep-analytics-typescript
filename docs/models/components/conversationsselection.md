# ConversationsSelection

Fields to select from conversations


## Supported Types

### `components.ConversationsAggregationSelection`

```typescript
const value: components.ConversationsAggregationSelection = {
  type: "aggregation",
  aggregation: "max",
};
```

### `components.ConversationsTimeBasedGroupBySelection`

```typescript
const value: components.ConversationsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "month",
};
```

### `components.ConversationsSimpleFieldSelection`

```typescript
const value: components.ConversationsSimpleFieldSelection = {
  type: "field",
  field: "organizationId",
};
```

