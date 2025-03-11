# Data

## Example Usage

```typescript
import { Data } from "@inkeep/inkeep-analytics/models/operations";

let value: Data = {
  result: [
    {
      id: "<id>",
      organizationId: "<id>",
      projectId: "<id>",
      integrationId: "<id>",
      firstMessageTime: "<value>",
      userMessageCount: 9818.3,
      type: "support_ticket",
    },
  ],
  total: 4973.91,
  pageSize: 6394.73,
  count: 3685.84,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.ConversationsResultItem](../../models/operations/conversationsresultitem.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `total`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pageSize`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `count`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |