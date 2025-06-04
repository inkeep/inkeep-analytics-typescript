# SemanticThreadFilterOR

SemanticThreadFilter OR operator

## Example Usage

```typescript
import { SemanticThreadFilterOR } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadFilterOR = {
  or: [
    {
      condition: {
        field: "isAnswerConfident",
        operator: "lt",
        value: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `or`                                    | *components.SemanticThreadFilterOROR*[] | :heavy_check_mark:                      | SemanticThreadFilter OR condition       |