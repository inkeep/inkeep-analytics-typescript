# TopSearchQueriesResponseBody

Top search queries

## Example Usage

```typescript
import { TopSearchQueriesResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: TopSearchQueriesResponseBody = {
  data: {
    result: [
      {
        searchQuery: "<value>",
        count: "<value>",
      },
    ],
    total: 2185.23,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_check_mark:                                 | N/A                                                |