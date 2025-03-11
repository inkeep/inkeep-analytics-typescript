# QueryEventsResponseBody

Response body for QueryEvents query endpoint

## Example Usage

```typescript
import { QueryEventsResponseBody } from "@inkeep/inkeep-analytics/models/components";

let value: QueryEventsResponseBody = {
  status: "ok",
  data: {
    result: [
      {
        id: "<id>",
        organizationId: "<id>",
        messageId: "<id>",
        conversationId: "<id>",
        createdAt: "1730027415828",
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
    total: 8726.51,
    pageSize: 2735.42,
    count: 7980.47,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `status`                                                                                             | [components.QueryEventsResponseBodyStatus](../../models/components/queryeventsresponsebodystatus.md) | :heavy_check_mark:                                                                                   | Status of the response                                                                               |
| `data`                                                                                               | [components.QueryEventsResponseData](../../models/components/queryeventsresponsedata.md)             | :heavy_check_mark:                                                                                   | Data object containing QueryEvents query results and pagination information                          |