# CRUD and View Model Service Examples

This folder demonstrates how to implement CRUD operations with support for view models, using various data sources such as REST APIs, Firestore, and JSON:API. The examples showcase a modular and abstracted approach to building CRUD services with reusable components and type-safe models.

## Overview

The examples in this folder illustrate:
- A base abstraction of a CRUD service ([BaseCrud](base-crud/base-crud.ng.ts)).
- Base implementations of the CRUD service using:
  - REST API ([BaseCrudRest](base-crud/rest/base-crud-rest.ng.ts)).
  - Firestore ([BaseCrudFirestore](base-crud/firestore/base-crud-firestore.ng.ts)).
  - JSON:API ([BaseCrudJsonApi](base-crud/json-api/base-crud-json-api.ng.ts)).
- A concrete example using the abstractions: the [UserCrud](user/user-crud.ng.ts) example.
- Type-safe models and view models for the `User` entity.

## Examples

### Base Abstraction of the CRUD Service
Defines the contracts and common logic for any CRUD service. This abstraction allows seamless integration with different data sources.

### Base Implementations of the CRUD Service
- **REST API Implementation:** Uses HTTP requests to perform CRUD operations.
- **Firestore Implementation:** Uses Firebase Firestore for data storage and retrieval.
- **JSON:API Implementation:** Adheres to the JSON:API specification for CRUD operations.

### UserCrud Example
Demonstrates how to extend the base abstractions to handle `User`-related data. This example includes:
- A REST API implementation ([UserCrudRest](user/rest/user-crud-rest.ng.ts)).
- A Firestore implementation ([UserCrudFireStore](user/firestore/user-crud-firestore.ng.ts)).
- A JSON:API implementation ([UserCrudJsonApi](user/json-api/user-crud-json-api.ng.ts)).
- A simple UI component ([UserList](user/user-list.ng.ts)) to display a list of users.

## Getting Started

1. Review the base abstraction in [`BaseCrud`](base-crud/base-crud.ng.ts) to understand the common interface.
2. Examine the REST, Firestore, and JSON:API implementations in their respective folders under `base-crud/`.
3. Explore the [`UserCrud`](user/user-crud.ng.ts) example to see how these abstractions are applied.
4. Review the view models and type-safe models in the `shared` folder (not included here).

## Usage

### REST API Configuration
- Ensure the required endpoints are accessible for the REST API implementation.
- Adjust the configurations in [`UserCrudRest`](user/rest/user-crud-rest.ng.ts) as needed.

### Firestore Configuration
- Set up Firebase Firestore in your project.
- Specify the collection name in [`UserCrudFireStore`](user/firestore/user-crud-firestore.ng.ts).

### JSON:API Configuration
- Ensure the backend adheres to the JSON:API specification.
- Adjust the configurations in [`UserCrudJsonApi`](user/json-api/user-crud-json-api.ng.ts).

### UI Integration
- Use the [`UserList`](user/user-list.ng.ts) component to display a list of users.
- The component demonstrates how to integrate the CRUD service with a frontend.

## Learn More

- [Angular Dependency Injection](https://angular.io/guide/dependency-injection)
- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)
- [JSON:API Specification](https://jsonapi.org/)
