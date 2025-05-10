# SelectEvent


## Supported Types

### `components.SelectMessageEvent`

```typescript
const value: components.SelectMessageEvent = {
  id: "<id>",
  type: "<value>",
  messageId: "<id>",
  createdAt: "1734669142431",
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
  createdAt: "1724836848218",
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
  createdAt: "1738475059953",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  entityType: "search",
};
```

