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

