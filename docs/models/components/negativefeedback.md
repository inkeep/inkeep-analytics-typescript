# NegativeFeedback

## Example Usage

```typescript
import { NegativeFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: NegativeFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1717386915497",
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://ripe-sweatshop.org",
    type: "support_copilot",
    supportTicketConversationId: "<id>",
    createdAt: "1740802286292",
    updatedAt: "1743800402003",
    projectId: "<id>",
    integrationId: "<id>",
    visibility: "public",
    messages: [
      {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://spiffy-testimonial.net",
        conversationId: "<id>",
        createdAt: "1712432157741",
        updatedAt: "1743823283542",
        role: "<value>",
        content: "<value>",
      },
    ],
  },
  message: {
    id: "<id>",
    type: "support_copilot",
    externalId: "<id>",
    externalUrl: "https://trustworthy-precedent.name",
    conversationId: "<id>",
    createdAt: "1731969519544",
    updatedAt: "1743804085425",
    role: "<value>",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [components.GetAllFeedbackResponseNegativeFeedbackType](../../models/components/getallfeedbackresponsenegativefeedbacktype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `messageId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `createdAt`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `reasons`                                                                                                                      | [components.GetAllFeedbackResponseReasons](../../models/components/getallfeedbackresponsereasons.md)[]                         | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `userProperties`                                                                                                               | Record<string, *any*>                                                                                                          | :heavy_minus_sign:                                                                                                             | A customizable collection of custom properties or attributes.                                                                  |
| `conversation`                                                                                                                 | *components.Conversation*                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `message`                                                                                                                      | *components.Message*                                                                                                           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |