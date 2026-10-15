import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

function BooksPage() {

    const [books, setBooks] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    // ===============================
    // FETCH BOOKS FROM API
    // ===============================

    useEffect(() => {

        fetchBooks();

    }, []);


    const fetchBooks = async () => {

        try {

            setLoading(true);

            setError("");

            const response = await axios.get(
                "http://localhost:3000/api/v1/books"
            );

            setBooks(response.data.data);

        } catch (err) {

            console.error(err);

            setError(
                "Unable to load books. Please check the backend server."
            );

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="books-page">

            {/* PAGE HEADER */}

            <div className="books-header">

                <div>

                    <span className="page-label">
                        LIBRARY COLLECTION
                    </span>

                    <h1>Explore Our Books</h1>

                    <p>
                        Browse our collection and find your
                        next great read.
                    </p>

                </div>

                <div className="book-count">

                    <strong>{books.length}</strong>

                    <span>Books</span>

                </div>

            </div>


            {/* LOADING STATE */}

            {loading && (

                <div className="loading">

                    <div className="spinner"></div>

                    <p>
                        Loading books...
                    </p>

                </div>

            )}


            {/* ERROR STATE */}

            {!loading && error && (

                <div className="error-box">

                    <h3>
                        ⚠️ Something went wrong
                    </h3>

                    <p>{error}</p>

                    <button
                        onClick={fetchBooks}
                        className="retry-button"
                    >
                        Try Again
                    </button>

                </div>

            )}


            {/* BOOK LIST */}

            {!loading &&
                !error &&
                books.length > 0 && (

                    <div className="books-grid">

                        {books.map((book) => (

                            <BookCard
                                key={book.id}
                                title={book.title}
                                author={book.author}
                                category={book.category}
                                available={book.available}
                            />

                        ))}

                    </div>

                )}


            {/* NO BOOKS */}

            {!loading &&
                !error &&
                books.length === 0 && (

                    <div className="empty-box">

                        <div>📚</div>

                        <h3>
                            No books found
                        </h3>

                        <p>
                            There are currently no books
                            available in the library.
                        </p>

                    </div>

                )}

        </div>

    );
}

export default BooksPage;