# Where


## Supported Types

### `components.EventsFilterCondition`

```typescript
const value: components.EventsFilterCondition = {
  condition: {
    field: "createdAt",
    operator: "notIn",
    value: {
      "key": "<value>",
    },
  },
};
```

### `components.EventsFilterAND`

```typescript
const value: components.EventsFilterAND = {
  and: [],
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
    operator: "notIn",
    value: [
      "<value>",
    ],
  },
};
```

### `components.ConversationsFilterAND`

```typescript
const value: components.ConversationsFilterAND = {
  and: [],
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
    operator: "gte",
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
  or: [],
};
```

