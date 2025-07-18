# FeedbackFilterCondition

## Example Usage

```typescript
import { FeedbackFilterCondition } from "@inkeep/inkeep-analytics/models/components";

let value: FeedbackFilterCondition = {
  condition: {
    field: "userProperties",
    operator: "jsonContainedBy",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `condition`                                                                                                | [components.FeedbackFilterConditionCondition](../../models/components/feedbackfilterconditioncondition.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |