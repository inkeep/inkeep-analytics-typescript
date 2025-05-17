# SelectEvent


## Supported Types

### `components.SelectMessageEvent`

```typescript
const value: components.SelectMessageEvent = {
  id: "<id>",
  type: "<value>",
  messageId: "<id>",
  createdAt: "1735273930863",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  entityType: "message",
};
```

### `components.SelectConversationEvent`

```typescript
const value: components.SelectConversationEvent = {
  id: "<id>",
  type: "<value>",
  conversationId: "<id>",
  createdAt: "1725441636647",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  entityType: "conversation",
};
```

### `components.SelectSearchEvent`

```typescript
const value: components.SelectSearchEvent = {
  id: "<id>",
  type: "<value>",
  searchQuery: "<value>",
  createdAt: "1739079848381",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  entityType: "search",
};
```

