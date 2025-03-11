# QueryConversationsResponseBody

Response body for QueryConversations query endpoint

## Example Usage

```typescript
import { QueryConversationsResponseBody } from "@inkeep/inkeep-analytics/models/components";

let value: QueryConversationsResponseBody = {
  status: "ok",
  data: {
    result: [
      {
        id: "<id>",
        organizationId: "<id>",
        projectId: "<id>",
        integrationId: "<id>",
        firstMessageTime: "<value>",
        userMessageCount: 1999.96,
        type: "openai",
      },
    ],
    total: 7936.98,
    pageSize: 2239.24,
    count: 3453.52,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `status`                                                                                               | [components.Status](../../models/components/status.md)                                                 | :heavy_check_mark:                                                                                     | Status of the response                                                                                 |
| `data`                                                                                                 | [components.QueryConversationsResponseData](../../models/components/queryconversationsresponsedata.md) | :heavy_check_mark:                                                                                     | Data object containing QueryConversations query results and pagination information                     |