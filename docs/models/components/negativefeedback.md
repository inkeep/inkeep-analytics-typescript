# NegativeFeedback

## Example Usage

```typescript
import { NegativeFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: NegativeFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1718855697532",
  userProperties: {
    identificationType: "COOKIED",
  },
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://ripe-sweatshop.org",
    type: "support_copilot",
    supportTicketConversationId: "<id>",
    createdAt: "1742271068327",
    updatedAt: "1745269184038",
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
        createdAt: "1713900939776",
        updatedAt: "1745292065577",
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
    createdAt: "1733438301579",
    updatedAt: "1745272867461",
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
| `userProperties`                                                                                                                                                         | [components.GetAllFeedbackResponseNegativeFeedbackUserProperties](../../models/components/getallfeedbackresponsenegativefeedbackuserproperties.md)                       | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description. |
| `conversation`                                                                                                                                                           | *components.Conversation*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `message`                                                                                                                                                                | *components.Message*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |