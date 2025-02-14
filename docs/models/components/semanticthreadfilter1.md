# SemanticThreadFilter1

## Example Usage

```typescript
import { SemanticThreadFilter1 } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadFilter1 = {
  condition: {
    field: "id",
    operator: "in",
    value: false,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `condition`                                                                                          | [components.SemanticThreadFilterCondition](../../models/components/semanticthreadfiltercondition.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |