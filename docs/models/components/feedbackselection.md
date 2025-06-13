# FeedbackSelection

Fields to select from feedback


## Supported Types

### `components.FeedbackAggregationSelection`

```typescript
const value: components.FeedbackAggregationSelection = {
  type: "aggregation",
  aggregation: "sum",
};
```

### `components.FeedbackTimeBasedGroupBySelection`

```typescript
const value: components.FeedbackTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "week",
};
```

### `components.FeedbackSimpleFieldSelection`

```typescript
const value: components.FeedbackSimpleFieldSelection = {
  type: "field",
  field: "integrationId",
};
```

