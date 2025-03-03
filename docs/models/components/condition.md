# Condition

## Example Usage

```typescript
import { Condition } from "@inkeep/inkeep-analytics/models/components";

let value: Condition = {
  field: "integrationId",
  operator: "gt",
  value: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `field`                                                                  | [components.ConditiionField](../../models/components/conditiionfield.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `operator`                                                               | [components.FilterOperator](../../models/components/filteroperator.md)   | :heavy_check_mark:                                                       | Available Select Operators                                               |
| `value`                                                                  | *components.ConditionValue*                                              | :heavy_check_mark:                                                       | The value to compare the field against                                   |