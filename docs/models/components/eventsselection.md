# EventsSelection

Fields to select from events


## Supported Types

### `components.EventsAggregationSelection`

```typescript
const value: components.EventsAggregationSelection = {
  type: "aggregation",
  aggregation: "count",
};
```

### `components.EventsTimeBasedGroupBySelection`

```typescript
const value: components.EventsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "week",
};
```

### `components.EventsSimpleFieldSelection`

```typescript
const value: components.EventsSimpleFieldSelection = {
  type: "field",
  field: "id",
};
```

