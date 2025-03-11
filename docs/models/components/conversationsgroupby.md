# ConversationsGroupBy

Group by options for conversations

## Example Usage

```typescript
import { ConversationsGroupBy } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsGroupBy = {
  field: "integrationId",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `field`                                                                        | [components.ConversationsField](../../models/components/conversationsfield.md) | :heavy_check_mark:                                                             | Available fields for Conversations                                             |
| `includeInSelect`                                                              | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |