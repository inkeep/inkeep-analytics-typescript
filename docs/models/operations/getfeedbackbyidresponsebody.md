# GetFeedbackByIdResponseBody

Feedback retrieved successfully

## Example Usage

```typescript
import { GetFeedbackByIdResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: GetFeedbackByIdResponseBody = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://comfortable-maintainer.net",
    type: "openai",
    supportTicketConversationId: "<id>",
    createdAt: "1706469649109",
    updatedAt: "1735687700115",
    projectId: "<id>",
    integrationId: "<id>",
    visibility: "private",
    messages: [],
    messagesOpenAIFormat: [],
  },
  message: {
    id: "<id>",
    type: "support_ticket",
    externalId: null,
    externalUrl: null,
    conversationId: "<id>",
    createdAt: "1710225230659",
    updatedAt: "1735666876281",
    role: "<value>",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | [operations.GetFeedbackByIdType](../../models/operations/getfeedbackbyidtype.md)                                                                                         | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `messageId`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `createdAt`                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_minus_sign:                                                                                                                                                       | A timestamp in ISO 8601 format with timezone information. If not provided, the current time will be used.                                                                |
| `reasons`                                                                                                                                                                | [operations.GetFeedbackByIdReasons](../../models/operations/getfeedbackbyidreasons.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `properties`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes.                                                                                                            |
| `userProperties`                                                                                                                                                         | [operations.GetFeedbackByIdUserProperties](../../models/operations/getfeedbackbyiduserproperties.md)                                                                     | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description. |
| `conversation`                                                                                                                                                           | *components.Conversation*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `message`                                                                                                                                                                | *components.Message*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |