# WeeklySearchUsersData

## Example Usage

```typescript
import { WeeklySearchUsersData } from "@inkeep/inkeep-analytics/models/operations";

let value: WeeklySearchUsersData = {
  result: [
    {
      week: "<value>",
      uniqueUsers: "<value>",
    },
  ],
  total: 6027.63,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.WeeklySearchUsersResult](../../models/operations/weeklysearchusersresult.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `total`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |