# PropertyValuesRequestBody

Query Property Values Params

## Example Usage

```typescript
import { PropertyValuesRequestBody } from "@inkeep/inkeep-analytics/models/components";

let value: PropertyValuesRequestBody = {
  field: "properties",
  key: "theme",
  views: [
    "events_view",
    "conversations_view",
    "semantic_threads_view",
    "feedback_view",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                  | [components.PropertyValuesRequestBodyField](../../models/components/propertyvaluesrequestbodyfield.md)   | :heavy_check_mark:                                                                                       | Which JSON field to query values from                                                                    | properties                                                                                               |
| `key`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The property key to get values for                                                                       | theme                                                                                                    |
| `views`                                                                                                  | [components.PropertyValuesRequestBodyViews](../../models/components/propertyvaluesrequestbodyviews.md)[] | :heavy_minus_sign:                                                                                       | Optional list of views to query (defaults to all views)                                                  | [<br/>"events_view",<br/>"conversations_view",<br/>"semantic_threads_view",<br/>"feedback_view"<br/>]    |
| `limit`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Maximum number of values to return                                                                       | 100                                                                                                      |