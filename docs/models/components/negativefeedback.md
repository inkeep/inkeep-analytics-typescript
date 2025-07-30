# NegativeFeedback

## Example Usage

```typescript
import { NegativeFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: NegativeFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1709249396560",
  updatedAt: "1735667605681",
  userProperties: {
    identificationType: "COOKIED",
  },
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://rotating-vicinity.name",
    type: "support_copilot",
    supportTicketConversationId: "<id>",
    createdAt: "1732705915746",
    updatedAt: "1735674770384",
    projectId: null,
    integrationId: "<id>",
    visibility: "public",
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
    externalUrl: "https://tinted-skeleton.biz",
    conversationId: "<id>",
    createdAt: "1735523494342",
    updatedAt: "1735629309827",
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
| `createdAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `updatedAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `reasons`                                                                                                                                                                | [components.GetAllFeedbackResponseReasons](../../models/components/getallfeedbackresponsereasons.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `details`                                                                                                                                                                | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `properties`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes.                                                                                                            |
| `userProperties`                                                                                                                                                         | [components.GetAllFeedbackResponseNegativeFeedbackUserProperties](../../models/components/getallfeedbackresponsenegativefeedbackuserproperties.md)                       | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description. |
| `sources`                                                                                                                                                                | [components.GetAllFeedbackResponseSources](../../models/components/getallfeedbackresponsesources.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `conversation`                                                                                                                                                           | *components.Conversation*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `message`                                                                                                                                                                | *components.Message*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |