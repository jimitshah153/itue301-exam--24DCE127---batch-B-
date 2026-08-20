const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data
let books = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K. Rowling",
        category: "Fantasy",
        isbn: "1111",
        available: true
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        isbn: "2222",
        available: false
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        category: "Dystopian",
        isbn: "3333",
        available: true
    }
];

let borrowings = [];

// Request Logger Middleware
const requestLogger = (req, res, next) => {
    console.log(
        `[${req.method}] ${req.path} [${new Date().toISOString()}]`
    );
    next();
};

// Apply logger globally
app.use(requestLogger);

// GET all books
app.get("/api/v1/books", (req, res) => {
    res.status(200).json({
        success: true,
        data: books
    });
});

// GET all borrowings
app.get("/api/v1/borrowings", (req, res) => {
    res.status(200).json({
        success: true,
        data: borrowings
    });
});

// POST borrowing
app.post("/api/v1/borrowings", (req, res) => {
    const { memberId, bookId, borrowDate, returnDate, status } = req.body;

    // Validation
    if (!memberId || !bookId) {
        return res.status(400).json({
            success: false,
            message: "memberId and bookId are required"
        });
    }

    if (!borrowDate || !returnDate) {
        return res.status(400).json({
            success: false,
            message: "borrowDate and returnDate are required"
        });
    }

    const borrowing = {
        id: borrowings.length + 1,
        memberId,
        bookId,
        borrowDate,
        returnDate,
        status: status || "borrowed"
    };

    borrowings.push(borrowing);
    res.status(201).json({
        success: true,
        data: borrowing
    });
});

// Global error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});