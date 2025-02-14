# ExportQuerySelect


## Supported Types

### `components.AggregationSelection`

```typescript
const value: components.AggregationSelection = {
  type: "aggregation",
  aggregation: "max",
};
```

### `components.TimeBasedGroupBySelection`

```typescript
const value: components.TimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "week",
  field: "id",
};
```

### `components.SimpleFieldSelection`

```typescript
const value: components.SimpleFieldSelection = {
  type: "field",
  field: "isFeatureSupported",
};
```

