# ConversationsFilter


## Supported Types

### `components.ConversationsFilterCondition`

```typescript
const value: components.ConversationsFilterCondition = {
  condition: {
    field: "userMessageCount",
    operator: "arrayContains",
    value: "<value>",
  },
};
```

### `components.ConversationsFilterAND`

```typescript
const value: components.ConversationsFilterAND = {
  and: [
    {
      condition: {
        field: "userMessageCount",
        operator: "arrayContains",
        value: "<value>",
      },
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

