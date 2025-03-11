# SemanticThreadGroupBy

Group by options for semantic threads

## Example Usage

```typescript
import { SemanticThreadGroupBy } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadGroupBy = {
  field: "isDocumented",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `field`                                                                          | [components.SemanticThreadField](../../models/components/semanticthreadfield.md) | :heavy_check_mark:                                                               | Available fields for SemanticThread                                              |
| `includeInSelect`                                                                | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |