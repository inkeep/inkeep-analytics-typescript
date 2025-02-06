# Conversation


## Supported Types

### `components.OpenAIConversation`

```typescript
const value: components.OpenAIConversation = {
  id: "<id>",
  type: "openai",
  createdAt: "1724574459496",
  updatedAt: "1738778469032",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "openai",
      conversationId: "<id>",
      createdAt: "1726275822611",
      updatedAt: "1738763754748",
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
  createdAt: "1732234917397",
  updatedAt: "1738762373379",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      conversationId: "<id>",
      createdAt: "1725180930099",
      updatedAt: "1738796648012",
      role: "<value>",
    },
  ],
};
```

