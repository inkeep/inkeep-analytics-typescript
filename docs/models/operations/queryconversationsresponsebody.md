# QueryConversationsResponseBody

Query results

## Example Usage

```typescript
import { QueryConversationsResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryConversationsResponseBody = {
  status: "ok",
  data: {
    result: [
      {},
    ],
    total: 3381.59,
    pageSize: 9615.71,
    count: 2317.01,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [operations.Data](../../models/operations/data.md)     | :heavy_check_mark:                                     | N/A                                                    |