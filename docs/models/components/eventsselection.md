# EventsSelection

Fields to select from events


## Supported Types

### `components.EventsAggregationSelection`

```typescript
const value: components.EventsAggregationSelection = {
  type: "aggregation",
  aggregation: "avg",
};
```

### `components.EventsTimeBasedGroupBySelection`

```typescript
const value: components.EventsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
};
```

### `components.EventsSimpleFieldSelection`

```typescript
const value: components.EventsSimpleFieldSelection = {
  type: "field",
  field: "eventType",
};
```

