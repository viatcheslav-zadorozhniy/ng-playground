# CRUD Service Examples

This folder demonstrates different implementations of CRUD services using a modular and abstracted approach. The examples include support for multiple data sources such as REST APIs and Firebase Firestore, showcasing reusable components and type-safe models.

## Overview

The examples in this folder illustrate:
- A base abstraction of a CRUD service ([BaseCrud](base-crud/base-crud.ng.ts)).
- Base implementations of the CRUD service using:
  - REST API ([BaseCrudRest](base-crud/rest/base-crud-rest.ng.ts)).
  - Firebase Firestore ([BaseCrudFirestore](base-crud/firestore/base-crud-firestore.ng.ts)).
- A concrete example using the abstractions: the [AlbumCrud](album/album-crud.ng.ts) example.

## Examples

### Base Abstraction of the CRUD Service
Defines the contracts and common logic for any CRUD service. This abstraction allows seamless integration with any backend or database.

### Base Implementations of the CRUD Service
- **REST API Implementation:** Uses HTTP requests to perform CRUD operations.
- **Firebase Firestore Implementation:** Leverages Firebase Firestore for database interactions.

### AlbumCrud Example
Demonstrates how to extend the base abstractions to handle album-related data. This example serves as a practical implementation of the CRUD service design. It includes:
- A REST API implementation ([AlbumCrudRest](album/rest/album-crud-rest.ng.ts)).
- A Firestore implementation ([AlbumCrudFireStore](album/firestore/album-crud-firestore.ng.ts)).
- A simple UI component ([AlbumList](album/album-list.ng.ts)) to display a list of albums.

## Getting Started

1. Review the base abstraction in [`BaseCrud`](base-crud/base-crud.ng.ts) to understand the common interface.
2. Examine the REST and Firestore implementations in their respective folders under `base-crud/`.
3. Explore the [`AlbumCrud`](album/album-crud.ng.ts) example to see how these abstractions can be applied in a real-world scenario.

## Usage

### REST API Configuration
- Ensure the required endpoints are accessible for the REST API implementation.
- Adjust the configurations in [`AlbumCrudRest`](album/rest/album-crud-rest.ng.ts) as needed.

### Firestore Configuration
- Set up Firebase Firestore in your project.
- Specify the collection name in [`AlbumCrudFireStore`](album/firestore/album-crud-firestore.ng.ts).

### UI Integration
- Use the [`AlbumList`](album/album-list.ng.ts) component to display a list of albums.
- The component demonstrates how to integrate the CRUD service with a frontend.

## Learn More

- [Angular Dependency Injection](https://angular.io/guide/dependency-injection)
- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)
