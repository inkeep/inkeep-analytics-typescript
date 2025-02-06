# QueryTableOrderBy

## Example Usage

```typescript
import { QueryTableOrderBy } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryTableOrderBy = {
  field: "sum_firstPartyEntities",
  direction: "asc",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `field`                           | *operations.QueryTableQueryField* | :heavy_check_mark:                | N/A                               |
| `direction`                       | *operations.QueryTableDirection*  | :heavy_check_mark:                | N/A                               |