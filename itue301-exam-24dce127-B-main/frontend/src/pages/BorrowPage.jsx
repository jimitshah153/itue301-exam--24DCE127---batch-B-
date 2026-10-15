import { useState } from "react";
import axios from "axios";

function BorrowPage() {

    const [memberName, setMemberName] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [borrowDate, setBorrowDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:3000/api/v1/borrowings",
                {
                    memberName,
                    bookTitle,
                    borrowDate,
                    returnDate,
                    status: "borrowed"
                }
            );

            setMessage(response.data.message);

            setMemberName("");
            setBookTitle("");
            setBorrowDate("");
            setReturnDate("");

        } catch (error) {

            setMessage(
                "Unable to create borrowing record."
            );

        }
    };

    return (

        <div className="borrow-page">

            <div className="borrow-container">

                <div className="borrow-info">

                    <span>LIBRARY SERVICES</span>

                    <h1>
                        Borrow Your
                        <strong> Favorite Book.</strong>
                    </h1>

                    <p>
                        Fill out the form to create a borrowing
                        record. Your information will be sent
                        securely to the library system.
                    </p>

                    <div className="borrow-features">

                        <div>
                            <span>✓</span>
                            Easy borrowing process
                        </div>

                        <div>
                            <span>✓</span>
                            Quick digital record
                        </div>

                        <div>
                            <span>✓</span>
                            Simple return tracking
                        </div>

                    </div>

                </div>


                <div className="borrow-card">

                    <h2>Borrow a Book</h2>

                    <p className="form-subtitle">
                        Enter the borrowing details below.
                    </p>

                    <form onSubmit={handleSubmit}>

                        <label>Member Name</label>

                        <input
                            type="text"
                            placeholder="Enter member name"
                            value={memberName}
                            onChange={(e) =>
                                setMemberName(e.target.value)
                            }
                            required
                        />


                        <label>Book Title</label>

                        <input
                            type="text"
                            placeholder="Enter book title"
                            value={bookTitle}
                            onChange={(e) =>
                                setBookTitle(e.target.value)
                            }
                            required
                        />


                        <div className="date-row">

                            <div>
                                <label>Borrow Date</label>

                                <input
                                    type="date"
                                    value={borrowDate}
                                    onChange={(e) =>
                                        setBorrowDate(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div>
                                <label>Return Date</label>

                                <input
                                    type="date"
                                    value={returnDate}
                                    onChange={(e) =>
                                        setReturnDate(e.target.value)
                                    }
                                    required
                                />
                            </div>

                        </div>


                        <button
                            type="submit"
                            className="borrow-button"
                        >
                            Confirm Borrowing →
                        </button>

                    </form>


                    {message && (

                        <div className="success-message">
                            ✓ {message}
                        </div>

                    )}

                </div>

            </div>

        </div>

    );
}

export default BorrowPage;