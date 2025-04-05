# SelectEvent


## Supported Types

### `components.SelectMessageEvent`

```typescript
const value: components.SelectMessageEvent = {
  id: "<id>",
  type: "<value>",
  messageId: "<id>",
  createdAt: "1731645151019",
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
  createdAt: "1721812856812",
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
  createdAt: "1735451068550",
  projectId: "<id>",
  integrationId: "<id>",
  entityType: "search",
};
```

