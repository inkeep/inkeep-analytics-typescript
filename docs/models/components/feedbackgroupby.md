# FeedbackGroupBy

Group by options for feedback

## Example Usage

```typescript
import { FeedbackGroupBy } from "@inkeep/inkeep-analytics/models/components";

let value: FeedbackGroupBy = {
  field: "reasons",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `field`                                                              | [components.FeedbackField](../../models/components/feedbackfield.md) | :heavy_check_mark:                                                   | Available fields for Feedback                                        |
| `path`                                                               | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `includeInSelect`                                                    | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |