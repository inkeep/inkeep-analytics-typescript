# Message


## Supported Types

### `components.OpenAIExtendedMessage`

```typescript
const value: components.OpenAIExtendedMessage = {
  id: "<id>",
  type: "openai",
  externalId: "<id>",
  externalUrl: "https://eminent-brace.org",
  conversationId: "<id>",
  createdAt: "1742820431804",
  updatedAt: "1743671058925",
  role: "assistant",
  content: [
    {
      type: "text",
    },
  ],
};
```

### `components.SupportTicketMessage`

```typescript
const value: components.SupportTicketMessage = {
  id: "<id>",
  type: "support_ticket",
  externalId: "<id>",
  externalUrl: "https://impure-department.com/",
  conversationId: "<id>",
  createdAt: "1713823323324",
  updatedAt: "1743650734402",
  role: "<value>",
  content: "<value>",
};
```

### `components.SupportCopilotMessage`

```typescript
const value: components.SupportCopilotMessage = {
  id: "<id>",
  type: "support_copilot",
  externalId: "<id>",
  externalUrl: "https://somber-cheetah.com/",
  conversationId: "<id>",
  createdAt: "1714964164975",
  updatedAt: "1743646108036",
  role: "<value>",
  content: "<value>",
};
```

