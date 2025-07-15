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
  details: "<value>",
  userProperties: {
    identificationType: "COOKIED",
  },
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://nautical-scratch.name/",
    type: "support_copilot",
    supportTicketConversationId: null,
    createdAt: "1734996497674",
    updatedAt: "1735689340275",
    projectId: "<id>",
    integrationId: "<id>",
    visibility: "private",
    messages: [],
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
| `createdAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `reasons`                                                                                                                                                                | [operations.GetFeedbackByIdReasons](../../models/operations/getfeedbackbyidreasons.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `details`                                                                                                                                                                | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `properties`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes.                                                                                                            |
| `userProperties`                                                                                                                                                         | [operations.GetFeedbackByIdUserProperties](../../models/operations/getfeedbackbyiduserproperties.md)                                                                     | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description. |
| `sources`                                                                                                                                                                | [operations.GetFeedbackByIdSources](../../models/operations/getfeedbackbyidsources.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `conversation`                                                                                                                                                           | *components.Conversation*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `message`                                                                                                                                                                | *components.Message*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |