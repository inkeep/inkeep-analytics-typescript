# PositiveFeedback

## Example Usage

```typescript
import { PositiveFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: PositiveFeedback = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  createdAt: "1731814877218",
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://content-mom.info",
    type: "support_ticket",
    supportTicketConversationId: "<id>",
    createdAt: "1716852899560",
    updatedAt: "1744113555213",
    projectId: "<id>",
    integrationId: "<id>",
    visibility: "public",
    messages: [
      {
        id: "<id>",
        type: "support_ticket",
        externalId: "<id>",
        externalUrl: "https://legal-impostor.com",
        conversationId: "<id>",
        createdAt: "1738250443561",
        updatedAt: "1744079211899",
        role: "<value>",
        content: "<value>",
      },
    ],
  },
  message: {
    id: "<id>",
    type: "support_ticket",
    externalId: "<id>",
    externalUrl: "https://unsightly-airport.net",
    conversationId: "<id>",
    createdAt: "1716242087972",
    updatedAt: "1744119059980",
    role: "<value>",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [components.GetAllFeedbackResponseType](../../models/components/getallfeedbackresponsetype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `messageId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `reasons`                                                                                      | [components.Reasons](../../models/components/reasons.md)[]                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userProperties`                                                                               | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | A customizable collection of custom properties or attributes.                                  |
| `conversation`                                                                                 | *components.Conversation*                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `message`                                                                                      | *components.Message*                                                                           | :heavy_check_mark:                                                                             | N/A                                                                                            |