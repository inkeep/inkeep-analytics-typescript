# SemanticThreadSelection

Fields to select from semantic threads


## Supported Types

### `components.SemanticThreadAggregationSelection`

```typescript
const value: components.SemanticThreadAggregationSelection = {
  type: "aggregation",
  aggregation: "min",
};
```

### `components.SemanticThreadTimeBasedGroupBySelection`

```typescript
const value: components.SemanticThreadTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
};
```

### `components.SemanticThreadSimpleFieldSelection`

```typescript
const value: components.SemanticThreadSimpleFieldSelection = {
  type: "field",
  field: "messagesCount",
};
```

