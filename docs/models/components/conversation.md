# Conversation


## Supported Types

### `components.OpenAIConversation`

```typescript
const value: components.OpenAIConversation = {
  id: "<id>",
  type: "openai",
  createdAt: "1725451288898",
  updatedAt: "1739655298435",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "openai",
      conversationId: "<id>",
      createdAt: "1727152652015",
      updatedAt: "1739640584152",
      role: "user",
      content: [
        {
          type: "text",
        },
      ],
    },
  ],
  messagesOpenAIFormat: [
    {
      role: "assistant",
      content: [
        {
          type: "text",
        },
      ],
    },
  ],
};
```

### `components.SupportTicketConversation`

```typescript
const value: components.SupportTicketConversation = {
  id: "<id>",
  type: "support_ticket",
  createdAt: "1733111746802",
  updatedAt: "1739639202784",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      conversationId: "<id>",
      createdAt: "1726057759504",
      updatedAt: "1739673477417",
      role: "<value>",
    },
  ],
};
```

### `components.SupportCopilotConversation`

```typescript
const value: components.SupportCopilotConversation = {
  id: "<id>",
  type: "support_copilot",
  createdAt: "1710384099854",
  updatedAt: "1739601034678",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      conversationId: "<id>",
      createdAt: "1708781514156",
      updatedAt: "1739665444317",
      role: "<value>",
    },
  ],
};
```

