 Sequelize ORM – User and Post Management

This project is a backend application built with Node.js, Express.js, Sequelize ORM, and MySQL. It demonstrates how to manage users and posts while establishing relationships between database tables.

The application supports CRUD operations (Create, Read, Update, and Delete) for both users and posts. Each user can have multiple posts, while each post belongs to one user. This relationship is managed using Sequelize's `hasMany` and `belongsTo` associations, with `userId` serving as the foreign key connecting the two tables.

UUIDs are used as primary keys, and Sequelize's eager loading feature (`include`) allows posts to be retrieved alongside details of their associated users.

The project also demonstrates how models, database migrations, controllers, and routes work together to structure a backend application and handle API requests. Postman is used to test the endpoints and verify that the operations work as expected.
