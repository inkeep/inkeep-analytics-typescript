# ConversationsAggregationSelection

## Example Usage

```typescript
import { ConversationsAggregationSelection } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsAggregationSelection = {
  type: "aggregation",
  aggregation: "avg",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.ConversationsAggregationSelectionType](../../models/components/conversationsaggregationselectiontype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `aggregation`                                                                                                        | [components.Aggregation](../../models/components/aggregation.md)                                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `field`                                                                                                              | [components.Field](../../models/components/field.md)                                                                 | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |