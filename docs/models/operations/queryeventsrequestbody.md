# QueryEventsRequestBody

Note: The maximum size of the request body is 2 MB.

## Example Usage

```typescript
import { QueryEventsRequestBody } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryEventsRequestBody = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `select`                                                                         | *operations.QueryEventsSelect*[]                                                 | :heavy_minus_sign:                                                               | N/A                                                                              |
| `groupBy`                                                                        | [operations.QueryEventsGroupBy](../../models/operations/queryeventsgroupby.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `where`                                                                          | *components.EventsFilter*                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `orderBy`                                                                        | [operations.QueryEventsOrderBy](../../models/operations/queryeventsorderby.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |