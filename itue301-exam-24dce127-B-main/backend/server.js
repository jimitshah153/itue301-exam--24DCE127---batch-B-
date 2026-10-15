const express = require("express");
const cors = require("cors");

const app = express();

const PORT =  3000;

// Middleware
app.use(cors());
app.use(express.json());


// ===============================
// Request Logger Middleware
// ===============================

const requestLogger = (req, res, next) => {
    console.log(
        `[${req.method}] ${req.path} [${new Date().toISOString()}]`
    );

    next();
};

app.use(requestLogger);


// ===============================
// Sample Books
// ===============================

const books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        isbn: "9780061122415",
        available: true
    },

    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        isbn: "9780132350884",
        available: false
    },

    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Help",
        isbn: "9780735211292",
        available: true
    },

    {
        id: 4,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Computer Science",
        isbn: "9780262046305",
        available: true
    }
];


// ===============================
// Borrowing Records
// ===============================

const borrowings = [
    {
        id: 1,
        memberName: "Rahul",
        bookTitle: "Clean Code",
        borrowDate: "2026-08-20",
        returnDate: "2026-08-27",
        status: "borrowed"
    }
];


// ===============================
// GET ALL BOOKS
// ===============================

app.get("/api/v1/books", (req, res) => {

    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    });

});


// ===============================
// GET ALL BORROWINGS
// ===============================

app.get("/api/v1/borrowings", (req, res) => {

    res.status(200).json({
        success: true,
        count: borrowings.length,
        data: borrowings
    });

});


// ===============================
// CREATE BORROWING
// ===============================

app.post("/api/v1/borrowings", (req, res) => {

    const {
        memberName,
        bookTitle,
        borrowDate,
        returnDate,
        status
    } = req.body;

    if (
        !memberName ||
        !bookTitle ||
        !borrowDate ||
        !returnDate
    ) {

        return res.status(400).json({
            success: false,
            message: "All borrowing fields are required."
        });

    }

    const borrowing = {

        id: borrowings.length + 1,

        memberName,

        bookTitle,

        borrowDate,

        returnDate,

        status: status || "borrowed"

    };

    borrowings.push(borrowing);

    res.status(201).json({

        success: true,

        message: "Borrowing record created successfully.",

        data: borrowing

    });

});


// ===============================
// HOME ROUTE
// ===============================

app.get("/", (req, res) => {

    res.send(
        "Library Management System API is running!"
    );

});


// ===============================
// 404 HANDLER
// ===============================

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Route not found"

    });

});


// ===============================
// GLOBAL ERROR HANDLER
// ===============================

app.use((err, req, res, next) => {

    console.error(err.message);

    res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});