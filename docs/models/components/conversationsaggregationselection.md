# ConversationsAggregationSelection

## Example Usage

```typescript
import { ConversationsAggregationSelection } from "inkeep-analytics-typescript/models/components";

let value: ConversationsAggregationSelection = {
  type: "aggregation",
  aggregation: "avg",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.ConversationsAggregationSelectionType](../../models/components/conversationsaggregationselectiontype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `aggregation`                                                                                                        | *components.Aggregation*                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `field`                                                                                                              | *components.Field*                                                                                                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |