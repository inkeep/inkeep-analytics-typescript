# InsertEvent


## Supported Types

### `components.InsertMessageEvent`

```typescript
const value: components.InsertMessageEvent = {
  type: "<value>",
  messageId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  entityType: "message",
};
```

### `components.InsertConversationEvent`

```typescript
const value: components.InsertConversationEvent = {
  type: "<value>",
  conversationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  entityType: "conversation",
};
```

### `components.InsertSearchEvent`

```typescript
const value: components.InsertSearchEvent = {
  type: "<value>",
  searchQuery: "<value>",
  userProperties: {
    identificationType: "COOKIED",
  },
  entityType: "search",
};
```

