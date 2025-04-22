# SemanticThreadFilterCondition

## Example Usage

```typescript
import { SemanticThreadFilterCondition } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadFilterCondition = {
  condition: {
    field: "emotion",
    operator: "lt",
    value: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `condition`                                                                                                            | [components.SemanticThreadFilterConditionCondition](../../models/components/semanticthreadfilterconditioncondition.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |