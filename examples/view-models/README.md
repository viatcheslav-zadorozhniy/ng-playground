# View Models Example

This example demonstrates how to encapsulate entity (DTO) and related business logic using ViewModels. The goal is to separate the data representation from the business logic while keeping the code maintainable and reusable.

## BaseViewModel

A common BaseViewModel is defined to avoid code duplication. It encapsulates shared functionality that can be inherited by more specific ViewModels.

### Example Implementation

```typescript
// BaseViewModel.ts
export class BaseViewModel<T> {
  constructor(public data: T) {}

  validate(): boolean {
    // Implement common validation logic here
    return true;
  }
}
```

## UserViewModel

The UserViewModel extends the BaseViewModel to wrap a User entity (DTO) and include user-specific business rules.

### Example Implementation

```typescript
// UserViewModel.ts
import { BaseViewModel } from './BaseViewModel';
import { User } from '../models/User';

export class UserViewModel extends BaseViewModel<User> {
  constructor(user: User) {
    super(user);
  }

  isActive(): boolean {
    // Business logic to determine if a user is active
    return this.data.status === 'active';
  }
}
```

## Benefits

- **Separation of Concerns:** Keeps DTOs clean and focused on data representation.
- **Reusability:** Common logic is centralized in the BaseViewModel.
- **Maintainability:** Updates to shared logic can be made in a single location.
