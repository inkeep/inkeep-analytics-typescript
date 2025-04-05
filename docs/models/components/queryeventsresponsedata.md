# QueryEventsResponseData

Data object containing QueryEvents query results and pagination information

## Example Usage

```typescript
import { QueryEventsResponseData } from "@inkeep/inkeep-analytics/models/components";

let value: QueryEventsResponseData = {
  result: [
    {},
  ],
  total: 4484.12,
  pageSize: 1859.79,
  count: 1926.56,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.EventsResultItem](../../models/components/eventsresultitem.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `total`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Total number of results matching the query                                   |
| `pageSize`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | Number of results per page                                                   |
| `count`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Number of results in the current response                                    |