# 📚 Library Management System

A full-stack web application designed for managing library books, member borrowing records, and transaction logs. Built with **React + Vite** on the frontend and **Node.js + Express** on the backend.

---

## 🚀 Tech Stack

### **Frontend**
- **Framework**: React 19 + Vite
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Styling**: Modern CSS3

### **Backend**
- **Runtime**: Node.js
- **Framework**: Express.js v5
- **Database**: MongoDB (via Mongoose)
- **Middleware**: CORS, Custom Request Logger

---

## ✨ Features

- 📖 **Book Catalog (`/books`)**: View all available books, check availability status, and explore book categories.
- 🔄 **Borrowing Management (`/borrow`)**: Track active book borrowings, borrow dates, expected return dates, and member records.
- ➕ **Issue / Borrow Books**: Form to issue books to library members with real-time status updates.
- ⚡ **RESTful API**: Clean API endpoints for books and borrowings management.

---

## 📁 Project Structure

```text
Library_Management_System/
├── backend/
│   ├── models/           # Mongoose schemas (Book, Member, Borrowing)
│   ├── routes/           # API route handlers
│   ├── server.js         # Express server & API endpoints
│   ├── package.json      # Backend dependencies & scripts
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable UI components (Navbar, BookCard, etc.)
│   │   ├── pages/        # Application pages (HomePage, BooksPage, BorrowPage)
│   │   ├── App.jsx       # Main App component with routing
│   │   └── main.jsx      # React entry point
│   ├── index.html
│   ├── package.json      # Frontend dependencies & scripts
│   └── .gitignore
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed on your machine.

---

### 1. Setup Backend

Navigate to the `backend` directory, install dependencies, and start the server:

```bash
cd backend
npm install
npm run dev
```

> The backend server will start on `http://localhost:3000`.

---

### 2. Setup Frontend

Open a new terminal window, navigate to the `frontend` directory, install dependencies, and run the development server:

```bash
cd frontend
npm install
npm run dev
```

> The React app will run on `http://localhost:5173`.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API Health Check |
| `GET` | `/api/v1/books` | Fetch list of all library books |
| `GET` | `/api/v1/borrowings` | Fetch list of all borrowing records |
| `POST` | `/api/v1/borrowings` | Create a new borrowing record |

### Example Request Body for Borrowing a Book:
```json
{
  "memberName": "Rahul",
  "bookTitle": "Clean Code",
  "borrowDate": "2026-08-20",
  "returnDate": "2026-08-27",
  "status": "borrowed"
}
```

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).