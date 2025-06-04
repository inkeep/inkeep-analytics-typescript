# Or


## Supported Types

### `components.ConversationsFilter`

```typescript
const value: components.ConversationsFilter = {
  and: [
    {
      or: [
        {
          condition: {
            field: "userMessageCount",
            operator: "arrayContains",
            value: "<value>",
          },
        },
      ],
    },
  ],
};
```

