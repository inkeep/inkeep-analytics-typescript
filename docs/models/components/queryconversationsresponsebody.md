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
        userProperties: {
          identificationType: "COOKIED",
        },
      },
    ],
    total: 3691.17,
    pageSize: 7666.28,
    count: 6347.53,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `status`                                                                                               | [components.Status](../../models/components/status.md)                                                 | :heavy_check_mark:                                                                                     | Status of the response                                                                                 |
| `data`                                                                                                 | [components.QueryConversationsResponseData](../../models/components/queryconversationsresponsedata.md) | :heavy_check_mark:                                                                                     | Data object containing QueryConversations query results and pagination information                     |