# Conquistadors Group 1 - E-commerce Application

## Table of Contents
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Frontend Pages](#frontend-pages)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Didactic Octo Telegram is a full-stack e-commerce application that allows users to browse products, add items to their cart, and make purchases. The backend is built with Node.js and Express, using MongoDB for the database. The frontend is built with React and styled with TailwindCSS.

## Folder Structure
.
├── backend
│ ├── controllers
│ │ ├── authController.js
│ │ ├── productController.js
│ │ ├── userController.js
│ │ └── ...
│ ├── middleware
│ │ ├── authMiddleware.js
│ │ └── ...
│ ├── models
│ │ ├── productSchema.js
│ │ ├── userSchema.js
│ │ └── ...
│ ├── routes
│ │ ├── authRoutes.js
│ │ ├── productRoutes.js
│ │ ├── userRoutes.js
│ │ └── ...
│ ├── .env
│ ├── package.json
│ ├── server.js
│ └── ...
├── frontend
│ ├── public
│ │ ├── index.html
│ │ └── ...
│ ├── src
│ │ ├── components
│ │ │ ├── CartPage.jsx
│ │ │ ├── HomePage.jsx
│ │ │ ├── ProductPage.jsx
│ │ │ └── ...
│ │ ├── styles
│ │ │ ├── App.css
│ │ │ └── ...
│ │ ├── App.js
│ │ ├── index.js
│ │ └── ...
│ ├── .env
│ ├── package.json
│ └── ...
└── README.md




## Tech Stack

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication

### Frontend
- React
- TailwindCSS
- PostCSS
- Autoprefixer

### Tools
- Git
- GitHub
- VSCode
- npm

## Installation

### Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/missionctrlbiz/didactic-octo-telegram.git
   cd didactic-octo-telegram/backend
   
Install dependencies:
npm install


Create a .env file and add your MongoDB URI and JWT secret:
env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000


Start the server:
npm start


Frontend
Navigate to the frontend directory:
cd ../frontend

Install dependencies:
npm install

Start the development server:
npm start


Ensure the backend server is running on port 3000:
cd backend
npm start


Ensure the frontend server is running:
cd ../frontend
npm start


Open your browser and navigate to http://localhost:3000 to view the application.
API Endpoints
Auth
POST /api/auth/register: Register a new user
POST /api/auth/login: Login a user

Users
GET /api/users/
: Get user details

PUT /api/users/
: Update user details

Products
GET /api/products: Get all products
POST /api/products: Create a new product
GET /api/products/

: Get a specific product
PUT /api/products/

: Update a product

DELETE /api/products
: Delete a product

Frontend Pages
Home Page
Displays a list of products with options to filter and sort.

Product Page
Displays detailed information about a selected product with options to add to cart.

Cart Page
Displays items added to the cart with options to update quantities and remove items.

Checkout Page
Allows users to review their cart, enter shipping details, and complete the purchase.

User Profile Page
Displays user information and order history with options to update profile details.

Contributing
Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/your-feature)

Create a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.

