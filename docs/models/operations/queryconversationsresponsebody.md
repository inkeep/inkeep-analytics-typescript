# QueryConversationsResponseBody

Query Conversations Results

## Example Usage

```typescript
import { QueryConversationsResponseBody } from "@inkeep/inkeep-analytics/models/operations";

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
        userMessageCount: 1369,
        type: "support_copilot",
      },
    ],
    total: 1898.48,
    pageSize: 5113.19,
    count: 2243.17,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [operations.Data](../../models/operations/data.md)     | :heavy_check_mark:                                     | N/A                                                    |