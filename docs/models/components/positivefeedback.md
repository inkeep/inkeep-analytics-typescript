# PositiveFeedback

## Example Usage

```typescript
import { PositiveFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: PositiveFeedback = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  createdAt: "1723345333062",
  updatedAt: "1735633533765",
  details: "<value>",
  userProperties: {
    identificationType: "COOKIED",
  },
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://linear-orchid.net/",
    type: "openai",
    supportTicketConversationId: "<id>",
    createdAt: "1718600127591",
    updatedAt: "1735614597742",
    projectId: "<id>",
    integrationId: null,
    visibility: "public",
    messages: [
      {
        id: "<id>",
        type: "openai",
        externalId: null,
        externalUrl: "https://muted-glider.net/",
        conversationId: "<id>",
        createdAt: "1727082986532",
        updatedAt: "1735641575395",
        role: "assistant",
        content: [
          {
            type: "text",
          },
        ],
        userProperties: {
          identificationType: "COOKIED",
        },
      },
    ],
    messagesOpenAIFormat: [],
  },
  message: {
    id: "<id>",
    type: "support_copilot",
    externalId: "<id>",
    externalUrl: "https://perfumed-juggernaut.name",
    conversationId: "<id>",
    createdAt: "1713190979921",
    updatedAt: "1735649045851",
    role: "<value>",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | [components.GetAllFeedbackResponseType](../../models/components/getallfeedbackresponsetype.md)                                                                           | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `messageId`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `createdAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `updatedAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `reasons`                                                                                                                                                                | [components.Reasons](../../models/components/reasons.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `details`                                                                                                                                                                | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `properties`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes.                                                                                                            |
| `userProperties`                                                                                                                                                         | [components.GetAllFeedbackResponseUserProperties](../../models/components/getallfeedbackresponseuserproperties.md)                                                       | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description. |
| `sources`                                                                                                                                                                | [components.Sources](../../models/components/sources.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `conversation`                                                                                                                                                           | *components.Conversation*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `message`                                                                                                                                                                | *components.Message*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |