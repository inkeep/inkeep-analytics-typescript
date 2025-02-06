# SemanticThreadFilter1

## Example Usage

```typescript
import { SemanticThreadFilter1 } from "inkeep-analytics-typescript/models/components";

let value: SemanticThreadFilter1 = {
  condition: {
    field: "id",
    operator: "notIn",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `condition`                                                                                          | [components.SemanticThreadFilterCondition](../../models/components/semanticthreadfiltercondition.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |