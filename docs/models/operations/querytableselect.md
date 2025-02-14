# QueryTableSelect


## Supported Types

### `components.AggregationSelection`

```typescript
const value: components.AggregationSelection = {
  type: "aggregation",
  aggregation: "avg",
};
```

### `components.TimeBasedGroupBySelection`

```typescript
const value: components.TimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
  field: "category",
};
```

### `components.SimpleFieldSelection`

```typescript
const value: components.SimpleFieldSelection = {
  type: "field",
  field: "isClear",
};
```

