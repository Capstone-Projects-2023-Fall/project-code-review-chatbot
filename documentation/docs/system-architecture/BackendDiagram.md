---
sidebar_position: 4
---

# Backend Class Diagram
[![backend-class-diagram.png](https://i.postimg.cc/gJBqB8z7/backend-class-diagram.png)](https://postimg.cc/xJMzXkbG)


## Classes and Descriptions

### `User`
- **Attributes**: `fillable`, `hidden`, `casts`, `appends`, `accessToken`
- **Operations**: `login()`, `register()`, `details()`, `successStatus`
- **Description**: Represents a user entity in the system with functionalities related to user operations.

### `UserController`
- **Operations**: `login()`, `register()`, `details()`
- **Description**: Manages user operations, routing requests to appropriate services or methods.

### `DBLogging`
- **Operations**: `logData()`
- **Description**: Handles the logging of database operations, storing log entries related to database activities.

### `AdminController`
- **Operations**: `dashboard()`, `index()`, `liveSessions()`, `logs()`, `destroy()`
- **Description**: Provides administrative control over the backend system, including a dashboard and log viewing capabilities.

### `CreateNewUser`
- **Operations**: `create()`
- **Description**: Specialized in handling the creation of new user entities.

### `ResetUserPassword`
- **Operations**: `reset()`
- **Description**: Dedicated to resetting user passwords.

### `UpdateUserProfileInformation`
- **Operations**: `update()`, `updateVerifiedUser()`
- **Description**: Manages updating user profile information.

### `DeleteUser`
- **Operations**: `delete()`
- **Description**: Handles the deletion of user entities.

### `FortifyServiceProvider`
- **Operations**: `register()`, `boot()`
- **Description**: Registers and boots foundational services for user operations.

### `JetstreamServiceProvider`
- **Operations**: `register()`, `boot()`, `configurePermissions()`
- **Description**: A service provider that sets up services and configurations, likely part of a specific framework.

### `VaporUiServiceProvider`
- **Operations**: `boot()`, `gate()`, `register()`
- **Description**: Provides UI-related services and registers them for the system's use.

## Relationships

The diagram shows several relationships between classes, indicating how they interact with each other. For instance:

- `UserController` ↔ `User`: Indicates `UserController` uses the `User` class to manage user data.
- Service providers (`FortifyServiceProvider`, `JetstreamServiceProvider`, `VaporUiServiceProvider`) ↔ User operation classes (`CreateNewUser`, `ResetUserPassword`, etc.)