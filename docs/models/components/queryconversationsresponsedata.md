# QueryConversationsResponseData

Data object containing QueryConversations query results and pagination information

## Example Usage

```typescript
import { QueryConversationsResponseData } from "@inkeep/inkeep-analytics/models/components";

let value: QueryConversationsResponseData = {
  result: [],
  total: 9651.27,
  pageSize: 9777.02,
  count: 8568.29,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ConversationsResultItem](../../models/components/conversationsresultitem.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `total`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | Total number of results matching the query                                                 |
| `pageSize`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | Number of results per page                                                                 |
| `count`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | Number of results in the current response                                                  |