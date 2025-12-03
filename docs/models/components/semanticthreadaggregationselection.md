# SemanticThreadAggregationSelection

## Example Usage

```typescript
import { SemanticThreadAggregationSelection } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadAggregationSelection = {
  type: "aggregation",
  aggregation: "min",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | *"aggregation"*                                                                                                                      | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `aggregation`                                                                                                                        | [components.SemanticThreadAggregationSelectionAggregation](../../models/components/semanticthreadaggregationselectionaggregation.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `field`                                                                                                                              | [components.SemanticThreadAggregationSelectionField](../../models/components/semanticthreadaggregationselectionfield.md)             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `path`                                                                                                                               | *string*[]                                                                                                                           | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |