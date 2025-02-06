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
    total: 6289.82,
    pageSize: 8726.51,
    count: 2735.42,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [operations.Data](../../models/operations/data.md)     | :heavy_check_mark:                                     | N/A                                                    |