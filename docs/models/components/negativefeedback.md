# NegativeFeedback

## Example Usage

```typescript
import { NegativeFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: NegativeFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://trim-term.net",
    type: "support_copilot",
    supportTicketConversationId: "<id>",
    createdAt: "1720423662593",
    updatedAt: "1735670950518",
    projectId: "<id>",
    integrationId: "<id>",
    visibility: null,
    messages: [
      {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://emotional-circumference.org",
        conversationId: "<id>",
        createdAt: "1734941336698",
        updatedAt: "1735668930778",
        role: "<value>",
        content: "<value>",
        userProperties: {
          identificationType: "COOKIED",
        },
      },
    ],
  },
  message: {
    id: "<id>",
    type: "support_copilot",
    externalId: "<id>",
    externalUrl: "https://nautical-opera.net",
    conversationId: "<id>",
    createdAt: "1731190000343",
    updatedAt: "1735673856387",
    role: "<value>",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | [components.GetAllFeedbackResponseNegativeFeedbackType](../../models/components/getallfeedbackresponsenegativefeedbacktype.md)                                           | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `messageId`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `createdAt`                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_minus_sign:                                                                                                                                                       | A timestamp in ISO 8601 format with timezone information. If not provided, the current time will be used.                                                                |
| `reasons`                                                                                                                                                                | [components.GetAllFeedbackResponseReasons](../../models/components/getallfeedbackresponsereasons.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `properties`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes.                                                                                                            |
| `userProperties`                                                                                                                                                         | [components.GetAllFeedbackResponseNegativeFeedbackUserProperties](../../models/components/getallfeedbackresponsenegativefeedbackuserproperties.md)                       | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description. |
| `conversation`                                                                                                                                                           | *components.Conversation*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `message`                                                                                                                                                                | *components.Message*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |