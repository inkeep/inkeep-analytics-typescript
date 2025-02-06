# QueryConversationsResponseBody

Query results

## Example Usage

```typescript
import { QueryConversationsResponseBody } from "inkeep-analytics-typescript/models/operations";

let value: QueryConversationsResponseBody = {
  status: "ok",
  data: {
    result: [
      {},
    ],
    total: 3777.52,
    pageSize: 1796.03,
    count: 246.78,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [operations.QueryConversationsStatus](../../models/operations/queryconversationsstatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [operations.QueryConversationsData](../../models/operations/queryconversationsdata.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |