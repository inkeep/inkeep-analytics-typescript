# QueryFeedbackRequestBody

Query Feedback Params

## Example Usage

```typescript
import { QueryFeedbackRequestBody } from "@inkeep/inkeep-analytics/models/components";

let value: QueryFeedbackRequestBody = {
  notes: "Count of feedback by type",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `select`                                                                   | *components.FeedbackSelection*[]                                           | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `groupBy`                                                                  | [components.FeedbackGroupBy](../../models/components/feedbackgroupby.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `where`                                                                    | *components.FeedbackFilter*                                                | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `orderBy`                                                                  | [components.FeedbackOrderBy](../../models/components/feedbackorderby.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `notes`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | Notes are not persisted, but may be useful for your debugging purposes     | Count of feedback by type                                                  |