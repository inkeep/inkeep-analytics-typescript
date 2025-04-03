# Conversation


## Supported Types

### `components.OpenAIConversation`

```typescript
const value: components.OpenAIConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://wealthy-lender.info/",
  type: "openai",
  supportTicketConversationId: "<id>",
  createdAt: "1720481468980",
  updatedAt: "1743654936478",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "openai",
      externalId: "<id>",
      externalUrl: "https://agitated-ocelot.name",
      conversationId: "<id>",
      createdAt: "1731594073372",
      updatedAt: "1743669582354",
      role: "assistant",
      content: "<value>",
    },
  ],
  messagesOpenAIFormat: [
    {
      role: "user",
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
  externalId: "<id>",
  externalUrl: "https://recent-cuckoo.com",
  type: "support_ticket",
  supportTicketConversationId: "<id>",
  createdAt: "1722085791626",
  updatedAt: "1743619467714",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      externalId: "<id>",
      externalUrl: "https://writhing-brochure.biz/",
      conversationId: "<id>",
      createdAt: "1717225500263",
      updatedAt: "1743644471375",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

### `components.SupportCopilotConversation`

```typescript
const value: components.SupportCopilotConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://lighthearted-developing.com/",
  type: "support_copilot",
  supportTicketConversationId: "<id>",
  createdAt: "1715619233812",
  updatedAt: "1743644749691",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      externalId: "<id>",
      externalUrl: "https://hoarse-slide.com/",
      conversationId: "<id>",
      createdAt: "1738563873238",
      updatedAt: "1743596346279",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

