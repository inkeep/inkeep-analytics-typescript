# OrderBySchema

## Example Usage

```typescript
import { OrderBySchema } from "@inkeep/inkeep-analytics/models/components";

let value: OrderBySchema = {
  field: "subject_day",
  direction: "desc",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `field`                                                                        | [components.OrderBySchemaField](../../models/components/orderbyschemafield.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `direction`                                                                    | [components.Direction](../../models/components/direction.md)                   | :heavy_check_mark:                                                             | N/A                                                                            |