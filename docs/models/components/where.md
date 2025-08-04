# Where


## Supported Types

### `components.EventsFilterCondition`

```typescript
const value: components.EventsFilterCondition = {
  condition: {
    field: "createdAt",
    operator: "arrayContains",
    value: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

### `components.EventsFilterAND`

```typescript
const value: components.EventsFilterAND = {
  and: [
    {
      or: [],
    },
  ],
};
```

### `components.EventsFilterOR`

```typescript
const value: components.EventsFilterOR = {
  or: [],
};
```

### `components.ConversationsFilterCondition`

```typescript
const value: components.ConversationsFilterCondition = {
  condition: {
    field: "userMessageCount",
    operator: "jsonContains",
    value: "<value>",
  },
};
```

### `components.ConversationsFilterAND`

```typescript
const value: components.ConversationsFilterAND = {
  and: [
    {
      and: [],
    },
  ],
};
```

### `components.ConversationsFilterOR`

```typescript
const value: components.ConversationsFilterOR = {
  or: [],
};
```

### `components.SemanticThreadFilterCondition`

```typescript
const value: components.SemanticThreadFilterCondition = {
  condition: {
    field: "isAnswerConfident",
    operator: "lt",
    value: "<value>",
  },
};
```

### `components.SemanticThreadFilterAND`

```typescript
const value: components.SemanticThreadFilterAND = {
  and: [],
};
```

### `components.SemanticThreadFilterOR`

```typescript
const value: components.SemanticThreadFilterOR = {
  or: [
    {
      or: [],
    },
  ],
};
```

### `components.FeedbackFilterCondition`

```typescript
const value: components.FeedbackFilterCondition = {
  condition: {
    field: "userProperties",
    operator: "jsonHasKey",
    value: "<value>",
  },
};
```

### `components.FeedbackFilterAND`

```typescript
const value: components.FeedbackFilterAND = {
  and: [],
};
```

### `components.FeedbackFilterOR`

```typescript
const value: components.FeedbackFilterOR = {
  or: [
    {
      or: [],
    },
  ],
};
```

