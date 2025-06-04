# QueryFeedbackResponseBody

Response body for QueryFeedback query endpoint

## Example Usage

```typescript
import { QueryFeedbackResponseBody } from "@inkeep/inkeep-analytics/models/components";

let value: QueryFeedbackResponseBody = {
  status: "ok",
  data: {
    result: [],
    total: 650.99,
    pageSize: 5831.21,
    count: 1639.46,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                 | [components.QueryFeedbackResponseBodyStatus](../../models/components/queryfeedbackresponsebodystatus.md) | :heavy_check_mark:                                                                                       | Status of the response                                                                                   |
| `data`                                                                                                   | [components.QueryFeedbackResponseData](../../models/components/queryfeedbackresponsedata.md)             | :heavy_check_mark:                                                                                       | Data object containing QueryFeedback query results and pagination information                            |