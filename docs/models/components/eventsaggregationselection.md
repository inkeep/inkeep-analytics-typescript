# EventsAggregationSelection

## Example Usage

```typescript
import { EventsAggregationSelection } from "@inkeep/inkeep-analytics/models/components";

let value: EventsAggregationSelection = {
  type: "aggregation",
  aggregation: "countDistinct",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | *"aggregation"*                                                                                                      | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `aggregation`                                                                                                        | [components.EventsAggregationSelectionAggregation](../../models/components/eventsaggregationselectionaggregation.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `field`                                                                                                              | [components.EventsAggregationSelectionField](../../models/components/eventsaggregationselectionfield.md)             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `path`                                                                                                               | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |