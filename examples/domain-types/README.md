# Domain Types Examples

This folder contains examples demonstrating different types of entity definitions and relationships. The examples showcase how to build scalable and reusable domain models for various use cases.

## Overview

The examples in this folder illustrate:
- **Base Entities**: Foundational building blocks for defining common properties and behaviors.
- **Related Entities**: Models that demonstrate associations between different data types.
- **Employee Entity**: A specialized example that extends base entities with additional functionality.

## Base Entities

Base entities serve as the primary data models and provide a reusable foundation for other entities. They define common properties and behaviors that ensure consistency across the application.

### Examples:
- **[BaseEntity](base-entity/base-entity.ts)**: Defines a generic `id` field that can be parameterized for flexibility.
- **[BaseEditableEntity](base-entity/base-editable-entity.ts)**: Extends `BaseEntity` to include `createdAt` and `updatedAt` fields for entities that can be edited.
- **[BaseBackendEntity](base-entity/base-backend-entity.ts)**: Demonstrates an alternative approach for backend-specific entity definitions using a simulated `ObjectId`.

## Related Entities

Related entities illustrate how to model associations between different data types, such as one-to-one, one-to-many, or many-to-many relationships.

### Examples:
- **[Property](related-entities/property.ts)**: Represents a property with a one-to-many relationship to `Room` entities. Includes both ID-based and populated versions of related entities.
- **[Room](related-entities/room.ts)**: Represents a room with a many-to-one relationship to a `Property` entity. Includes both ID-based and populated versions of the related property.

## Employee Entity

The [Employee](employee/employee.ts) entity is a specialized example that extends the base entity. It integrates additional information specific to employees and employs an alternative definition of enumerable values using [AccessLevel](employee/access-level.ts).

### Key Aspects:
- Inherits common properties from the base entity.
- Includes additional employee-specific fields such as `name`, `email`, etc.
- Utilizes a custom enumerable ([AccessLevel](employee/access-level.ts)) to define access levels, offering flexibility in handling permissions and responsibilities.

## Summary

These examples demonstrate how to build scalable and reusable domain models:
- **Base Entities** provide a consistent and extensible foundation.
- **Related Entities** manage associations between different entities efficiently.
- **Employee Entity** showcases extending functionality with inheritance and custom enumerations.

## Learn More

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Mongoose ObjectId](https://mongoosejs.com/docs/schematypes.html#objectids)
