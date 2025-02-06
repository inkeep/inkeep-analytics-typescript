# CreateConversation


## Supported Types

### `components.CreateOpenAIConversation`

```typescript
const value: components.CreateOpenAIConversation = {
  type: "openai",
  messages: [
    {
      role: "system",
      content: "<value>",
    },
  ],
};
```

### `components.CreateSupportTicketConversation`

```typescript
const value: components.CreateSupportTicketConversation = {
  type: "support_ticket",
  messages: [
    {
      role: "<value>",
    },
  ],
};
```

