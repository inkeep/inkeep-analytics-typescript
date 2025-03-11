# SemanticThreadSelection

Fields to select from semantic threads


## Supported Types

### `components.SemanticThreadAggregationSelection`

```typescript
const value: components.SemanticThreadAggregationSelection = {
  type: "aggregation",
  aggregation: "max",
};
```

### `components.SemanticThreadTimeBasedGroupBySelection`

```typescript
const value: components.SemanticThreadTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "week",
};
```

### `components.SemanticThreadSimpleFieldSelection`

```typescript
const value: components.SemanticThreadSimpleFieldSelection = {
  type: "field",
  field: "id",
};
```

