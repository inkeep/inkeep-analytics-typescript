# OpenAIExtendedMessage

A message that includes the OpenAI chat completion details.

## Example Usage

```typescript
import { OpenAIExtendedMessage } from "@inkeep/inkeep-analytics/models/components";

let value: OpenAIExtendedMessage = {
  id: "<id>",
  type: "openai",
  externalId: "<id>",
  externalUrl: "https://inexperienced-barracks.net/",
  conversationId: "<id>",
  createdAt: "1728141231338",
  updatedAt: "1741745417831",
  role: "user",
  content: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [components.OpenAIExtendedMessageType](../../models/components/openaiextendedmessagetype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `externalId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `externalUrl`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `conversationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `role`                                                                                       | [components.Role](../../models/components/role.md)                                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `content`                                                                                    | *components.Content*                                                                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `links`                                                                                      | [components.Links](../../models/components/links.md)[]                                       | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `properties`                                                                                 | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | A customizable collection of custom properties or attributes.                                |
| `userProperties`                                                                             | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | A customizable collection of custom properties or attributes.                                |
| `toolCalls`                                                                                  | [components.OpenAIToolCall](../../models/components/openaitoolcall.md)[]                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |