# EventsSelection

Fields to select from events


## Supported Types

### `components.EventsAggregationSelection`

```typescript
const value: components.EventsAggregationSelection = {
  type: "aggregation",
  aggregation: "sum",
};
```

### `components.EventsTimeBasedGroupBySelection`

```typescript
const value: components.EventsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "hour",
};
```

### `components.EventsSimpleFieldSelection`

```typescript
const value: components.EventsSimpleFieldSelection = {
  type: "field",
  field: "projectId",
};
```

