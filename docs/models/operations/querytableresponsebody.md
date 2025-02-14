# QueryTableResponseBody

Query results

## Example Usage

```typescript
import { QueryTableResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryTableResponseBody = {
  status: "ok",
  data: {
    result: [
      {},
    ],
    total: 3960.6,
    pageSize: 5654.21,
    count: 1832.8,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [operations.Data](../../models/operations/data.md)     | :heavy_check_mark:                                     | N/A                                                    |