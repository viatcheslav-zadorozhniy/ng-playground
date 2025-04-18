# CRUD and Zod Examples

This folder demonstrates how to integrate CRUD operations with [Zod](https://zod.dev/), a TypeScript-first schema declaration and validation library. The examples showcase a modular and abstracted approach to building CRUD services with type-safe validation.

## Overview

The examples in this folder illustrate:
- A base abstraction of a CRUD service ([BaseCrud](base-crud/base-crud.ng.ts)).
- Base implementations of the CRUD service using:
  - REST API ([BaseCrudRest](base-crud/rest/base-crud-rest.ng.ts)).
- A concrete example using the abstractions: the [PostCrud](post-crud/post-crud.ng.ts) example.
- Type-safe schemas and models for the `Post` entity using Zod.

## Examples

### Base Abstraction of the CRUD Service
Defines the contracts and common logic for any CRUD service. This abstraction allows seamless integration with any backend or database.

### Base Implementations of the CRUD Service
- **REST API Implementation:** Uses HTTP requests to perform CRUD operations, with validation powered by Zod.

### PostCrud Example
Demonstrates how to extend the base abstractions to handle `Post`-related data. This example includes:
- A REST API implementation ([PostCrudRest](post-crud/rest/post-crud-rest.ng.ts)).
- Type-safe schemas for `Post` entities ([Post Schema](types/post.schema.ts)).

## Getting Started

1. Review the base abstraction in [`BaseCrud`](base-crud/base-crud.ng.ts) to understand the common interface.
2. Examine the REST implementation in [`BaseCrudRest`](base-crud/rest/base-crud-rest.ng.ts).
3. Explore the [`PostCrud`](post-crud/post-crud.ng.ts) example to see how these abstractions are applied.
4. Review the Zod schemas in [`Post Schema`](types/post.schema.ts) to understand how type-safe validation is implemented.

## Usage

### REST API Configuration
- Ensure the required endpoints are accessible for the REST API implementation.
- Adjust the configurations in [`PostCrudRest`](post-crud/rest/post-crud-rest.ng.ts) as needed.

### Zod Validation
- Use the schemas in [`Post Schema`](types/post.schema.ts) to validate incoming and outgoing data.
- Extend or modify the schemas to fit your project's requirements.

## UI Example
The folder also includes a simple UI component ([PostList](ui/post-list.ng.ts)) to display a list of posts, demonstrating how to integrate the CRUD service with a frontend.

## Learn More

- [Zod Documentation](https://zod.dev/)
- [Nx Documentation](https://nx.dev/)
