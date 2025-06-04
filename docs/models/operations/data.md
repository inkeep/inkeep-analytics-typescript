# Data

## Example Usage

```typescript
import { Data } from "@inkeep/inkeep-analytics/models/operations";

let value: Data = {
  result: [
    {
      searchQuery: "<value>",
      count: "<value>",
    },
  ],
  total: 6622.99,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `result`                                                 | [operations.Result](../../models/operations/result.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `total`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |