# OpenAIChatCompletionMessage

## Example Usage

```typescript
import { OpenAIChatCompletionMessage } from "@inkeep/inkeep-analytics/models/components";

let value: OpenAIChatCompletionMessage = {
  role: "system",
  content: [
    {
      type: "text",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                   | [components.OpenAIChatCompletionMessageRole](../../models/components/openaichatcompletionmessagerole.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `content`                                                                                                | *components.OpenAIChatCompletionMessageContent*                                                          | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `toolCalls`                                                                                              | [components.OpenAIToolCall](../../models/components/openaitoolcall.md)[]                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |