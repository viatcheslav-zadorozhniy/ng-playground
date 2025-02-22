# Domain Types Examples

This repository contains examples demonstrating different types of entity definitions and relationships. The examples include:

## Base Entities

Base entities serve as the primary data models and foundational building blocks. They define common properties and behaviors that may be extended or reused by other entities.

*Example:*
- Each base entity may have properties like `id` ([BaseEntity](base-entity/base-entity.ts)), `createdAt`, and `updatedAt` ([BaseEditableEntity](base-entity/base-editable-entity.ts)).
- They provide a consistent structure that guarantees compatibility across different parts of the application.

## Related Entities

Related entities illustrate how to model associations between different data types. These relationships can be one-to-one, one-to-many, or many-to-many.

*Example:*
- One entity may reference another by storing foreign keys.
- They are used to organize complex data structures and maintain related information efficiently.

## User Entity

The [User](user/user.ts) entity is a specialized example that extends the base entity. It integrates additional information specific to users and employs an alternative definition of enumerable values using [UserRole](user/user-role.ts).

*Key Aspects:*
- Inherits common properties from the base entity.
- Includes additional user-specific fields such as `name`, `email`, etc.
- Utilizes a custom enumerable ([UserRole](user/user-role.ts)) to define user roles, offering flexibility in handling user permissions and responsibilities.

## Summary

These examples show how to build scalable domain models:
- **Base Entities** provide a reusable foundation.
- **Related Entities** manage associations between different entities.
- **User Entity** demonstrates extending functionality by combining inheritance and custom enumeration for enhanced role management.
