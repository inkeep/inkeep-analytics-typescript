# Mode

Export mode for JSON/array fields. "unpack" (default): Flattens JSON into separate columns (e.g., properties.key1, properties.key2). "json": Exports the entire JSON object as a single stringified column. Applicable to: properties, userProperties, and for feedback exports: reasons, sources.

## Example Usage

```typescript
import { Mode } from "@inkeep/inkeep-analytics/models/components";

let value: Mode = "json";
```

## Values

```typescript
"unpack" | "json"
```