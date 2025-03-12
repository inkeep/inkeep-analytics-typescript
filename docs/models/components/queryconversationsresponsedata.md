# QueryConversationsResponseData

Data object containing QueryConversations query results and pagination information

## Example Usage

```typescript
import { QueryConversationsResponseData } from "@inkeep/inkeep-analytics/models/components";

let value: QueryConversationsResponseData = {
  result: [
    {},
  ],
  total: 8605.52,
  pageSize: 7270.44,
  count: 2703.28,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ConversationsResultItem](../../models/components/conversationsresultitem.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `total`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | Total number of results matching the query                                                 |
| `pageSize`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | Number of results per page                                                                 |
| `count`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | Number of results in the current response                                                  |