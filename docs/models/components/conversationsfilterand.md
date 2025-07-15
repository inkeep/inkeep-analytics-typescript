# ConversationsFilterAND

ConversationsFilter AND operator

## Example Usage

```typescript
import { ConversationsFilterAND } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsFilterAND = {
  and: [
    {
      and: [],
    },
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `and`                             | *components.And*[]                | :heavy_check_mark:                | ConversationsFilter AND condition |