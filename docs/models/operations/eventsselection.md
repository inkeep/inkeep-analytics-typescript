# EventsSelection


## Supported Types

### `components.EventsAggregationSelection`

```typescript
const value: components.EventsAggregationSelection = {
  type: "aggregation",
  aggregation: "max",
};
```

### `components.EventsTimeBasedGroupBySelection`

```typescript
const value: components.EventsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "month",
  field: "messageId",
};
```

### `components.EventsSimpleFieldSelection`

```typescript
const value: components.EventsSimpleFieldSelection = {
  type: "field",
  field: "properties",
};
```

