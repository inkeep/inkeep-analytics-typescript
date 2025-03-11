# QueryEventsResponseData

Data object containing QueryEvents query results and pagination information

## Example Usage

```typescript
import { QueryEventsResponseData } from "@inkeep/inkeep-analytics/models/components";

let value: QueryEventsResponseData = {
  result: [
    {},
  ],
  total: 8310.49,
  pageSize: 6289.82,
  count: 8726.51,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.EventsResultItem](../../models/components/eventsresultitem.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `total`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Total number of results matching the query                                   |
| `pageSize`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | Number of results per page                                                   |
| `count`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Number of results in the current response                                    |