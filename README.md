# E-commerce API with Sequelize (Backend)

This REST API powers the backend for an e-commerce site, providing endpoints to manage products, categories and tags through a relational database. Built with Node, Express and Sequelize ORM.

Walkthrough of how to start the server and create data:
[Untitled_ Feb 2, 2024 11_02 AM.webm](https://github.com/HackDehZack/Module-13-Ecommerce-Back-End/assets/140559436/da95dc7b-3d06-4701-aed6-10f24bbba726)


Demonstration of insomnia testing: 
[Untitled_ Feb 2, 2024 10_33 AM.webm](https://github.com/HackDehZack/Module-13-Ecommerce-Back-End/assets/140559436/09467218-ad0d-4cb3-9d5f-ee87dea243c9)



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

## Testing 

Import the postman collection or use Insomnia to test requests.



## Questions

For any other questions, contact me at zackseriousemail@gmail.com.
