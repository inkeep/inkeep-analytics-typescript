# QueryFeedbackResponseData

Data object containing QueryFeedback query results and pagination information

## Example Usage

```typescript
import { QueryFeedbackResponseData } from "@inkeep/inkeep-analytics/models/components";

let value: QueryFeedbackResponseData = {
  result: [],
  total: 6998.9,
  pageSize: 8328.29,
  count: 8933.37,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.FeedbackResultItem](../../models/components/feedbackresultitem.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `total`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | Total number of results matching the query                                       |
| `pageSize`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | Number of results per page                                                       |
| `count`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | Number of results in the current response                                        |