# SelectEvent


## Supported Types

### `components.SelectMessageEvent`

```typescript
const value: components.SelectMessageEvent = {
  id: "<id>",
  type: "<value>",
  messageId: "<id>",
  createdAt: "1734290624280",
  projectId: "<id>",
  integrationId: "<id>",
  entityType: "message",
};
```

### `components.SelectConversationEvent`

```typescript
const value: components.SelectConversationEvent = {
  id: "<id>",
  type: "<value>",
  conversationId: "<id>",
  createdAt: "1711768657460",
  projectId: "<id>",
  integrationId: "<id>",
  entityType: "conversation",
};
```

### `components.SelectSearchEvent`

```typescript
const value: components.SelectSearchEvent = {
  id: "<id>",
  type: "<value>",
  searchQuery: "<value>",
  createdAt: "1735709314852",
  projectId: "<id>",
  integrationId: "<id>",
  entityType: "search",
};
```

