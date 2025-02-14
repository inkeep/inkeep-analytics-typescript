# QueryEventsSelect


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
  timeUnit: "week",
  field: "properties",
};
```

### `components.EventsSimpleFieldSelection`

```typescript
const value: components.EventsSimpleFieldSelection = {
  type: "field",
  field: "searchQuery",
};
```

