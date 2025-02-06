# OpenAIToolCall

## Example Usage

```typescript
import { OpenAIToolCall } from "@inkeep/inkeep-analytics/models/components";

let value: OpenAIToolCall = {
  id: "<id>",
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [components.OpenAIToolCallType](../../models/components/openaitoolcalltype.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `function`                                                                             | [components.OpenAIToolCallFunction](../../models/components/openaitoolcallfunction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |