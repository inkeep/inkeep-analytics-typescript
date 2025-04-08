# ConversationsGroupBy

Group by options for conversations

## Example Usage

```typescript
import { ConversationsGroupBy } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsGroupBy = {
  field: "type",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `field`                                                                        | [components.ConversationsField](../../models/components/conversationsfield.md) | :heavy_check_mark:                                                             | Available fields for Conversations                                             |
| `path`                                                                         | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `includeInSelect`                                                              | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |