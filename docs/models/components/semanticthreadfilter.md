# SemanticThreadFilter


## Supported Types

### `components.SemanticThreadFilterCondition`

```typescript
const value: components.SemanticThreadFilterCondition = {
  condition: {
    field: "isAnswerConfident",
    operator: "lt",
    value: "<value>",
  },
};
```

### `components.SemanticThreadFilterAND`

```typescript
const value: components.SemanticThreadFilterAND = {
  and: [],
};
```

### `components.SemanticThreadFilterOR`

```typescript
const value: components.SemanticThreadFilterOR = {
  or: [
    {
      condition: {
        field: "isAnswerConfident",
        operator: "lt",
        value: "<value>",
      },
    },
  ],
};
```

