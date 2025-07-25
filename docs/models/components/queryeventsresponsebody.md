# QueryEventsResponseBody

Response body for QueryEvents query endpoint

## Example Usage

```typescript
import { QueryEventsResponseBody } from "@inkeep/inkeep-analytics/models/components";

let value: QueryEventsResponseBody = {
  status: "ok",
  data: {
    result: [
      {},
    ],
    total: 2137.81,
    pageSize: 5529.71,
    count: 2433.23,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `status`                                                                                             | [components.QueryEventsResponseBodyStatus](../../models/components/queryeventsresponsebodystatus.md) | :heavy_check_mark:                                                                                   | Status of the response                                                                               |
| `data`                                                                                               | [components.QueryEventsResponseData](../../models/components/queryeventsresponsedata.md)             | :heavy_check_mark:                                                                                   | Data object containing QueryEvents query results and pagination information                          |