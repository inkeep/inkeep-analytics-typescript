# OpenAIChatCompletionMessage

## Example Usage

```typescript
import { OpenAIChatCompletionMessage } from "inkeep-analytics-typescript/models/components";

let value: OpenAIChatCompletionMessage = {
  role: "user",
  content: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                   | [components.OpenAIChatCompletionMessageRole](../../models/components/openaichatcompletionmessagerole.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `content`                                                                                                | *components.OpenAIChatCompletionMessageContent*                                                          | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `toolCalls`                                                                                              | [components.OpenAIToolCall](../../models/components/openaitoolcall.md)[]                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |