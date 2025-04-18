# PositiveFeedback

## Example Usage

```typescript
import { PositiveFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: PositiveFeedback = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  createdAt: "1731834366912",
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://content-mom.info",
    type: "support_ticket",
    supportTicketConversationId: "<id>",
    createdAt: "1716872389254",
    updatedAt: "1744133044907",
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
        createdAt: "1738269933255",
        updatedAt: "1744098701592",
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
    createdAt: "1716261577664",
    updatedAt: "1744138549672",
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