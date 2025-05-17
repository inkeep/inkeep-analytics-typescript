# NegativeFeedback

## Example Usage

```typescript
import { NegativeFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: NegativeFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1721015690404",
  userProperties: {
    identificationType: "COOKIED",
  },
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://ripe-sweatshop.org",
    type: "support_copilot",
    supportTicketConversationId: "<id>",
    createdAt: "1744431061200",
    updatedAt: "1747429176911",
    projectId: "<id>",
    integrationId: "<id>",
    userProperties: {
      identificationType: "COOKIED",
    },
    visibility: "public",
    messages: [
      {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://spiffy-testimonial.net",
        conversationId: "<id>",
        createdAt: "1716060932651",
        updatedAt: "1747452058452",
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
    externalUrl: "https://trustworthy-precedent.name",
    conversationId: "<id>",
    createdAt: "1735598294457",
    updatedAt: "1747432860338",
    role: "<value>",
    content: "<value>",
    userProperties: {
      identificationType: "COOKIED",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | [components.GetAllFeedbackResponseNegativeFeedbackType](../../models/components/getallfeedbackresponsenegativefeedbacktype.md)                                           | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `messageId`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `createdAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `reasons`                                                                                                                                                                | [components.GetAllFeedbackResponseReasons](../../models/components/getallfeedbackresponsereasons.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `properties`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes.                                                                                                            |
| `userProperties`                                                                                                                                                         | [components.GetAllFeedbackResponseNegativeFeedbackUserProperties](../../models/components/getallfeedbackresponsenegativefeedbackuserproperties.md)                       | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description. |
| `conversation`                                                                                                                                                           | *components.Conversation*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `message`                                                                                                                                                                | *components.Message*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |