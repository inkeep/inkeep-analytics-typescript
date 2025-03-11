# QueryEventsResponseData

Data object containing QueryEvents query results and pagination information

## Example Usage

```typescript
import { QueryEventsResponseData } from "@inkeep/inkeep-analytics/models/components";

let value: QueryEventsResponseData = {
  result: [
    {
      id: "<id>",
      organizationId: "<id>",
      messageId: "<id>",
      conversationId: "<id>",
      createdAt: "1740239081803",
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
  total: 6874.88,
  pageSize: 2155.07,
  count: 9473.71,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.EventsResultItem](../../models/components/eventsresultitem.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `total`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Total number of results matching the query                                   |
| `pageSize`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | Number of results per page                                                   |
| `count`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Number of results in the current response                                    |