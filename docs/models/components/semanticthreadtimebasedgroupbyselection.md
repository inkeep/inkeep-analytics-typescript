# SemanticThreadTimeBasedGroupBySelection

## Example Usage

```typescript
import { SemanticThreadTimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "hour",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [components.SemanticThreadTimeBasedGroupBySelectionType](../../models/components/semanticthreadtimebasedgroupbyselectiontype.md)   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `timeUnit`                                                                                                                         | [components.TimeUnit](../../models/components/timeunit.md)                                                                         | :heavy_check_mark:                                                                                                                 | Valid time units for time-based operations                                                                                         |
| `field`                                                                                                                            | [components.SemanticThreadTimeBasedGroupBySelectionField](../../models/components/semanticthreadtimebasedgroupbyselectionfield.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |