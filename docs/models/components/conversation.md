# Conversation


## Supported Types

### `components.OpenAIConversation`

```typescript
const value: components.OpenAIConversation = {
  id: "<id>",
  type: "openai",
  createdAt: "1727492893508",
  updatedAt: "1741696903044",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "openai",
      conversationId: "<id>",
      createdAt: "1729194256624",
      updatedAt: "1741682188761",
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
  createdAt: "1735153351411",
  updatedAt: "1741680807393",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      conversationId: "<id>",
      createdAt: "1728099364113",
      updatedAt: "1741715082026",
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
  createdAt: "1712425704463",
  updatedAt: "1741642639288",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      conversationId: "<id>",
      createdAt: "1710823118765",
      updatedAt: "1741707048926",
      role: "<value>",
    },
  ],
};
```

