# AggregationSelection

## Example Usage

```typescript
import { AggregationSelection } from "@inkeep/inkeep-analytics/models/components";

let value: AggregationSelection = {
  type: "aggregation",
  aggregation: "avg",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.AggregationSelectionType](../../models/components/aggregationselectiontype.md)               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `aggregation`                                                                                            | [components.AggregationSelectionAggregation](../../models/components/aggregationselectionaggregation.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `field`                                                                                                  | [components.AggregationSelectionField](../../models/components/aggregationselectionfield.md)             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |