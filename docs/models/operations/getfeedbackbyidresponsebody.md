# GetFeedbackByIdResponseBody

Feedback retrieved successfully

## Example Usage

```typescript
import { GetFeedbackByIdResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: GetFeedbackByIdResponseBody = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  createdAt: "1718482638517",
  updatedAt: "1735617871006",
  userProperties: {
    identificationType: "COOKIED",
  },
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://squiggly-pension.com",
    type: "support_ticket",
    supportTicketConversationId: "<id>",
    createdAt: "1735595163239",
    updatedAt: "1735650136992",
    projectId: "<id>",
    integrationId: "<id>",
    visibility: "private",
    messages: [
      {
        id: "<id>",
        type: "support_ticket",
        externalId: null,
        externalUrl: null,
        conversationId: "<id>",
        createdAt: "1710225230659",
        updatedAt: "1735666876281",
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
    type: "openai",
    externalId: null,
    externalUrl: "https://plump-barge.info",
    conversationId: "<id>",
    createdAt: "1709046915886",
    updatedAt: "1735640644257",
    role: "system",
    content: [],
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | [operations.GetFeedbackByIdType](../../models/operations/getfeedbackbyidtype.md)                                                                                         | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `messageId`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `createdAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `updatedAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `reasons`                                                                                                                                                                | [operations.GetFeedbackByIdReasons](../../models/operations/getfeedbackbyidreasons.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `details`                                                                                                                                                                | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `properties`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes.                                                                                                            |
| `userProperties`                                                                                                                                                         | [operations.GetFeedbackByIdUserProperties](../../models/operations/getfeedbackbyiduserproperties.md)                                                                     | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description. |
| `sources`                                                                                                                                                                | [operations.GetFeedbackByIdSources](../../models/operations/getfeedbackbyidsources.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `conversation`                                                                                                                                                           | *components.Conversation*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `message`                                                                                                                                                                | *components.Message*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |