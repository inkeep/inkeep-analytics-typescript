# QueryEventsParams

## Example Usage

```typescript
import { QueryEventsParams } from "@inkeep/inkeep-analytics/models/components";

let value: QueryEventsParams = {
  notes: "Count of events by type",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `select`                                                               | *components.EventsSelection*[]                                         | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `groupBy`                                                              | [components.EventsGroupBy](../../models/components/eventsgroupby.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `where`                                                                | *components.EventsFilter*                                              | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `orderBy`                                                              | [components.EventsOrderBy](../../models/components/eventsorderby.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `notes`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Notes are not persisted, but may be useful for your debugging purposes | Count of events by type                                                |