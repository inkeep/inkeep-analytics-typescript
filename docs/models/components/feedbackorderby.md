# FeedbackOrderBy

Specifies how to order Feedback query results by field and direction

## Example Usage

```typescript
import { FeedbackOrderBy } from "@inkeep/inkeep-analytics/models/components";

let value: FeedbackOrderBy = {
  field: "createdAt_day",
  direction: "asc",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `field`                                                                                    | [components.FeedbackOrderByField](../../models/components/feedbackorderbyfield.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `direction`                                                                                | [components.FeedbackOrderByDirection](../../models/components/feedbackorderbydirection.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |