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
  createdAt: "1742816003504",
  updatedAt: "1743666630625",
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
  createdAt: "1713818895025",
  updatedAt: "1743646306102",
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
  createdAt: "1714959736675",
  updatedAt: "1743641679736",
  role: "<value>",
  content: "<value>",
};
```

