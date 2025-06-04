# ConversationsFilterAND

ConversationsFilter AND operator

## Example Usage

```typescript
import { ConversationsFilterAND } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsFilterAND = {
  and: [
    {
      or: [
        {
          condition: {
            field: "userMessageCount",
            operator: "arrayContains",
            value: "<value>",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `and`                             | *components.And*[]                | :heavy_check_mark:                | ConversationsFilter AND condition |