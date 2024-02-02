# E-commerce API with Sequelize (Backend)

This REST API powers the backend for an e-commerce site, providing endpoints to manage products, categories and tags through a relational database. Built with Node, Express and Sequelize ORM.

Walkthrough of how to start the server and create data:

[ServerStart.webm](https://github.com/HackDehZack/Module-13-Ecommerce-Back-End/assets/140559436/06ea8b63-6071-4379-a2d9-9bd165cb3a5d)

Demonstration of insomnia testing: 

[InsomniaTesting.webm](https://github.com/HackDehZack/Module-13-Ecommerce-Back-End/assets/140559436/a5ac8f22-3d4e-4248-9753-cad841feac9d)



## Table of Contents

- [Installation](#installation)
- [Endpoints](#endpoints)
  - [Categories](#categories)
  - [Products](#products) 
  - [Tags](#tags)
- [Database Models](#database-models)
- [Relationships](#relationships)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)


## Installation

1. Clone the repo
2. Run `npm install` to install dependencies
3. Create a `.env` file (see [Getting Started](#getting-started))
4. Set up the database:
   - Remember you need to sign into MySQL!
   - `source db/schema.sql` to create tables
   - `npm run seed` to populate sample data
6. Start the server with `npm start`

## Endpoints

### Categories

| Method | Endpoint           | Description                  |
|-|-|-|
| GET | /api/categories | Get all categories            |  
| GET | /api/categories/:id | Get single category by ID     |
| POST | /api/categories| Create a new category        |
| PUT | /api/categories/:id| Update a category            |  
| DELETE | /api/categories/:id| Delete a category            |

### Products

| Method | Endpoint          | Description                    |
|-|-|-|  
| GET | /api/products | Get all products                |
| GET | /api/products/:id | Get single product by ID        |
| POST | /api/products| Create a new product           |
| PUT | /api/products/:id| Update a product               |
| DELETE | /api/products/:id| Delete a product               |

### Tags 

See categories endpoints for similar tag routes.

## Database Models

Product, Category, Tag models define columns, validation and associations. 

See [models](models/) for full definitions.

## Relationships

- Product belongs to Category
- Category has many Products
- Product belongs to many Tags
- Tag belongs to many Products

## Getting Started

Copy the sample .env file and configure with your MySQL user, pass, db name.
DB_NAME= db name
DB_USER= user
DB_PASSWORD= password
DB_HOST=localhost (or whichever hosting you're using.)

## Testing 

Import the postman collection or use Insomnia to test requests.



## Questions

For any other questions, contact me at zackseriousemail@gmail.com.
