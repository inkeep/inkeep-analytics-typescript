# FeedbackAggregationSelection

## Example Usage

```typescript
import { FeedbackAggregationSelection } from "@inkeep/inkeep-analytics/models/components";

let value: FeedbackAggregationSelection = {
  type: "aggregation",
  aggregation: "sum",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *"aggregation"*                                                                                                          | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `aggregation`                                                                                                            | [components.FeedbackAggregationSelectionAggregation](../../models/components/feedbackaggregationselectionaggregation.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `field`                                                                                                                  | [components.FeedbackAggregationSelectionField](../../models/components/feedbackaggregationselectionfield.md)             | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `path`                                                                                                                   | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |