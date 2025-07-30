# SemanticThreadOrderBy

Specifies how to order SemanticThread query results by field and direction

## Example Usage

```typescript
import { SemanticThreadOrderBy } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadOrderBy = {
  field: "count_hasPositiveFeedback",
  direction: "desc",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `field`                                                                                                | [components.SemanticThreadOrderByField](../../models/components/semanticthreadorderbyfield.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `direction`                                                                                            | [components.SemanticThreadOrderByDirection](../../models/components/semanticthreadorderbydirection.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |