# Food Delivery App

A full-stack food delivery application built with React for the frontend and Node.js/Express for the backend, featuring user authentication, cart management, and payment integration.

## Features

- User authentication (login/signup)
- Browse food items by category
- Add items to cart
- Place orders with payment processing via Stripe
- Responsive design for mobile and desktop

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Vite (build tool)
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT for authentication
- Stripe for payments
- Multer for file uploads

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Stripe account for payments

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/hariprasanth-22/Food_Delivery_App.git
   cd food-delivery
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add your MongoDB connection string, JWT secret, and Stripe keys

5. Start the backend server:
   ```bash
   cd backend
   npm run server
   ```

6. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:5173` (or the port shown by Vite)

## API Endpoints

- `GET /` - API status check
- `POST /api/food/add` - Add new food item
- `GET /api/food/list` - Get all food items
- `POST /api/food/remove` - Remove food item
- `/images` - Static file serving for uploaded images

## Project Structure

```
food-delivery/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── .env
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
