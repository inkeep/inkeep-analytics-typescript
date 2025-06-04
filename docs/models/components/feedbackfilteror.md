# FeedbackFilterOR

FeedbackFilter OR operator

## Example Usage

```typescript
import { FeedbackFilterOR } from "@inkeep/inkeep-analytics/models/components";

let value: FeedbackFilterOR = {
  or: [
    {
      and: [
        {
          and: [],
        },
      ],
    },
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `or`                              | *components.FeedbackFilterOROR*[] | :heavy_check_mark:                | FeedbackFilter OR condition       |