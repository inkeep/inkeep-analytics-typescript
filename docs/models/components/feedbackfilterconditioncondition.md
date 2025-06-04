# FeedbackFilterConditionCondition

## Example Usage

```typescript
import { FeedbackFilterConditionCondition } from "@inkeep/inkeep-analytics/models/components";

let value: FeedbackFilterConditionCondition = {
  field: "id",
  operator: "jsonHasAllKeys",
  value: true,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                       | [components.FeedbackField](../../models/components/feedbackfield.md)                                          | :heavy_check_mark:                                                                                            | Available fields for Feedback                                                                                 |
| `operator`                                                                                                    | [components.FilterOperator](../../models/components/filteroperator.md)                                        | :heavy_check_mark:                                                                                            | Available operators for filtering data                                                                        |
| `value`                                                                                                       | *any*                                                                                                         | :heavy_check_mark:                                                                                            | The value to compare the field against. For JSON fields, can be either a JSON object or a {path, value} pair. |