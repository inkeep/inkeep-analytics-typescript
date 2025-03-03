# Conversation


## Supported Types

### `components.OpenAIConversation`

```typescript
const value: components.OpenAIConversation = {
  id: "<id>",
  type: "openai",
  createdAt: "1726814606607",
  updatedAt: "1741018616144",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "openai",
      conversationId: "<id>",
      createdAt: "1728515969724",
      updatedAt: "1741003901861",
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
  createdAt: "1734475064511",
  updatedAt: "1741002520493",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      conversationId: "<id>",
      createdAt: "1727421077213",
      updatedAt: "1741036795126",
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
  createdAt: "1711747417563",
  updatedAt: "1740964352388",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      conversationId: "<id>",
      createdAt: "1710144831865",
      updatedAt: "1741028762027",
      role: "<value>",
    },
  ],
};
```

