# SemanticThreadFilterCondition

## Example Usage

```typescript
import { SemanticThreadFilterCondition } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadFilterCondition = {
  condition: {
    field: "areAIAnnotationsVerified",
    operator: "in",
    value: 9037.2,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `condition`                                                                                                            | [components.SemanticThreadFilterConditionCondition](../../models/components/semanticthreadfilterconditioncondition.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |