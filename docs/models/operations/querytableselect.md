# QueryTableSelect


## Supported Types

### `components.AggregationSelection`

```typescript
const value: components.AggregationSelection = {
  type: "aggregation",
  aggregation: "sum",
};
```

### `components.TimeBasedGroupBySelection`

```typescript
const value: components.TimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
  field: "isInitialQuestionAnswer",
};
```

### `components.SimpleFieldSelection`

```typescript
const value: components.SimpleFieldSelection = {
  type: "field",
  field: "hasNegativeFeedback",
};
```

