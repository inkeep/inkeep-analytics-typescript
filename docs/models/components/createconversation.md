# CreateConversation


## Supported Types

### `components.CreateOpenAIConversation`

```typescript
const value: components.CreateOpenAIConversation = {
  type: "openai",
  userProperties: {
    identificationType: "COOKIED",
  },
  messages: [
    {
      role: "assistant",
      content: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
    },
  ],
};
```

### `components.CreateSupportTicketConversation`

```typescript
const value: components.CreateSupportTicketConversation = {
  type: "support_ticket",
  userProperties: {
    identificationType: "COOKIED",
  },
  messages: [
    {
      role: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
    },
  ],
};
```

### `components.CreateSupportCopilotConversation`

```typescript
const value: components.CreateSupportCopilotConversation = {
  type: "support_copilot",
  userProperties: {
    identificationType: "COOKIED",
  },
  messages: [
    {
      role: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
    },
  ],
};
```

