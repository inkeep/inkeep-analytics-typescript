# QueryEventsOrderBy

## Example Usage

```typescript
import { QueryEventsOrderBy } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryEventsOrderBy = {
  field: "createdAt_week",
  direction: "asc",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `field`                            | *operations.QueryEventsQueryField* | :heavy_check_mark:                 | N/A                                |
| `direction`                        | *operations.QueryEventsDirection*  | :heavy_check_mark:                 | N/A                                |