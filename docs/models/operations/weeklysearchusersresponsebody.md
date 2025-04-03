# WeeklySearchUsersResponseBody

Weekly search users

## Example Usage

```typescript
import { WeeklySearchUsersResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: WeeklySearchUsersResponseBody = {
  data: {
    result: [
      {
        week: "<value>",
        uniqueUsers: "<value>",
      },
    ],
    total: 5448.83,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.WeeklySearchUsersData](../../models/operations/weeklysearchusersdata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |