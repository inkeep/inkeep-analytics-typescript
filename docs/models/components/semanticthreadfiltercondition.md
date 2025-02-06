# SemanticThreadFilterCondition

## Example Usage

```typescript
import { SemanticThreadFilterCondition } from "inkeep-analytics-typescript/models/components";

let value: SemanticThreadFilterCondition = {
  field: "firstPartyEntities",
  operator: "eq",
  value: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `field`                                   | *components.SemanticThreadFilterField*    | :heavy_check_mark:                        | N/A                                       |
| `operator`                                | *components.SemanticThreadFilterOperator* | :heavy_check_mark:                        | N/A                                       |
| `value`                                   | *components.SemanticThreadFilterValue*    | :heavy_check_mark:                        | N/A                                       |