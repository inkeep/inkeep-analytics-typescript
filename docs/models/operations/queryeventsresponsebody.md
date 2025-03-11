# QueryEventsResponseBody

Query results

## Example Usage

```typescript
import { QueryEventsResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryEventsResponseBody = {
  status: "ok",
  data: {
    result: [
      {
        id: "<id>",
        organizationId: "<id>",
        messageId: "<id>",
        conversationId: "<id>",
        createdAt: "1734595868132",
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
    total: 3331.45,
    pageSize: 811.01,
    count: 4072.41,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `status`                                                                     | [operations.QueryEventsStatus](../../models/operations/queryeventsstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.QueryEventsData](../../models/operations/queryeventsdata.md)     | :heavy_check_mark:                                                           | N/A                                                                          |