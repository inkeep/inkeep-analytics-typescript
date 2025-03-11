# QueryConversationsResponseData

Data object containing QueryConversations query results and pagination information

## Example Usage

```typescript
import { QueryConversationsResponseData } from "@inkeep/inkeep-analytics/models/components";

let value: QueryConversationsResponseData = {
  result: [
    {
      id: "<id>",
      organizationId: "<id>",
      projectId: "<id>",
      integrationId: "<id>",
      firstMessageTime: "<value>",
      userMessageCount: 1646.94,
      type: "support_ticket",
    },
  ],
  total: 5772.29,
  pageSize: 2378.93,
  count: 9342.14,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ConversationsResultItem](../../models/components/conversationsresultitem.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `total`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | Total number of results matching the query                                                 |
| `pageSize`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | Number of results per page                                                                 |
| `count`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | Number of results in the current response                                                  |