# PropertyValuesRequestBody

Query Property Values Params

## Example Usage

```typescript
import { PropertyValuesRequestBody } from "@inkeep/inkeep-analytics/models/components";

let value: PropertyValuesRequestBody = {
  field: "properties",
  key: "theme",
  search: "dark",
  views: [
    "events_view",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                  | [components.PropertyValuesRequestBodyField](../../models/components/propertyvaluesrequestbodyfield.md)   | :heavy_check_mark:                                                                                       | Which JSON field to query values from                                                                    | properties                                                                                               |
| `key`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The property key to get values for                                                                       | theme                                                                                                    |
| `search`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Optional search term to filter values                                                                    | dark                                                                                                     |
| `views`                                                                                                  | [components.PropertyValuesRequestBodyViews](../../models/components/propertyvaluesrequestbodyviews.md)[] | :heavy_minus_sign:                                                                                       | Optional list of views to query (defaults to all views)                                                  | [<br/>"events_view"<br/>]                                                                                |
| `limit`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Maximum number of values to return                                                                       | 100                                                                                                      |