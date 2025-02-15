# SemanticThreadFilterCondition

## Example Usage

```typescript
import { SemanticThreadFilterCondition } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadFilterCondition = {
  field: "isInitialQuestionAnswer",
  operator: "neq",
  value: 2633.22,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `field`                                          | *components.SemanticThreadFilterField*           | :heavy_check_mark:                               | N/A                                              |
| `operator`                                       | *components.SemanticThreadFilterSelectOperators* | :heavy_check_mark:                               | Available Select Operators                       |
| `value`                                          | *components.SemanticThreadFilterValue*           | :heavy_check_mark:                               | N/A                                              |