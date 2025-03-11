# QueryEventsData

## Example Usage

```typescript
import { QueryEventsData } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryEventsData = {
  result: [
    {
      id: "<id>",
      organizationId: "<id>",
      messageId: "<id>",
      conversationId: "<id>",
      createdAt: "1737375583045",
      projectId: "<id>",
      integrationId: "<id>",
      eventType: "<value>",
      type: "<value>",
      searchQuery: "<value>",
      properties: {
        "key": "<value>",
      },
      userProperties: {
        "key": "<value>",
      },
    },
  ],
  total: 9729.2,
  pageSize: 9608.35,
  count: 9065.56,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [operations.EventsResultItem](../../models/operations/eventsresultitem.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `total`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `pageSize`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `count`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |