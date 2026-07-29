# KrishMart - React Redux E-Commerce Application

KrishMart is a hypermarket-style e-commerce web application built using React.js and Redux Toolkit.

The application represents a large online hypermarket where users can browse products from different categories, search and filter products, view product details, add products to their cart, adjust quantities, manage their wishlist and proceed through the shopping flow.

The project is being developed in two phases:

1. Frontend using React.js, Redux Toolkit and local JSON data
2. Backend using Node.js, Express.js and MongoDB

The frontend will be completed and deployed on Netlify first. Once the frontend is stable, the local JSON data and mock authentication will be replaced with real backend APIs.

---

## Features

### Authentication

- Login screen
- User authentication
- Protected routes
- Logout
- User information stored in Redux
- Authentication persistence using LocalStorage

### Dashboard

- Welcome section
- Product/category highlights
- Featured products
- Popular products
- Quick navigation to shopping sections

### Product Management

- Product listing
- Product categories
- Product details
- Product cards
- Product images
- Product price
- Original price
- Discount
- Rating
- Reviews
- Stock information
- Brand
- Product description

### Search and Filter

- Search products
- Filter products by category
- Sort products
- Featured products
- Price low to high
- Price high to low
- Top-rated products
- Best discount products

### Shopping Cart

- Add product to cart
- Remove product from cart
- Increase quantity
- Decrease quantity
- Cart item count
- Product subtotal
- Total cart amount
- Order summary

### Wishlist

- Add product to wishlist
- Remove product from wishlist
- Wishlist state managed through Redux

### UI / UX

- Responsive design
- Header
- Navigation menu
- Category navigation
- Footer
- Loading state
- Toast notifications
- Product details page
- 404 / Not Found page

---

# Technology Stack

## Frontend

- React.js
- Vite
- JavaScript
- CSS

## State Management

- Redux Toolkit
- React Redux

## Routing

- React Router DOM

## HTTP Client

- Axios

Axios is included so that the current local JSON data can later be replaced with real REST APIs.

## Notifications

- React Hot Toast

## Current Data Source

Currently the application uses local JSON data:

```text
src/data/products.json
src/data/users.json