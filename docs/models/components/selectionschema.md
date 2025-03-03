# SelectionSchema

Either an aggregation, time based group by, or a simple field


## Supported Types

### `components.AggregationSelection`

```typescript
const value: components.AggregationSelection = {
  type: "aggregation",
  aggregation: "count",
};
```

### `components.TimeBasedGroupBySelection`

```typescript
const value: components.TimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
  field: "emotion",
};
```

### `components.SimpleFieldSelection`

```typescript
const value: components.SimpleFieldSelection = {
  type: "field",
  field: "lastUpdated",
};
```

