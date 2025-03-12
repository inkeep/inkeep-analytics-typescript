# CreateConversation


## Supported Types

### `components.CreateOpenAIConversation`

```typescript
const value: components.CreateOpenAIConversation = {
  type: "openai",
  messages: [
    {
      role: "assistant",
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

### `components.CreateSupportCopilotConversation`

```typescript
const value: components.CreateSupportCopilotConversation = {
  type: "support_copilot",
  messages: [
    {
      role: "<value>",
    },
  ],
};
```

