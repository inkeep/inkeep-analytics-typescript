# EventsAggregationSelection

## Example Usage

```typescript
import { EventsAggregationSelection } from "@inkeep/inkeep-analytics/models/components";

let value: EventsAggregationSelection = {
  type: "aggregation",
  aggregation: "count",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.EventsAggregationSelectionType](../../models/components/eventsaggregationselectiontype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `aggregation`                                                                                          | *components.EventsAggregationSelectionAggregation*                                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `field`                                                                                                | *components.EventsAggregationSelectionField*                                                           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |