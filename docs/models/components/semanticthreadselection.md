# SemanticThreadSelection

Fields to select from semantic threads


## Supported Types

### `components.SemanticThreadAggregationSelection`

```typescript
const value: components.SemanticThreadAggregationSelection = {
  type: "aggregation",
  aggregation: "avg",
};
```

### `components.SemanticThreadTimeBasedGroupBySelection`

```typescript
const value: components.SemanticThreadTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "hour",
};
```

### `components.SemanticThreadSimpleFieldSelection`

```typescript
const value: components.SemanticThreadSimpleFieldSelection = {
  type: "field",
  field: "sentiment",
};
```

