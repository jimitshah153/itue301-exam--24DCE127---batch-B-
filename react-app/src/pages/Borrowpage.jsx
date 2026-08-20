import { useState } from "react";
import "./BorrowPage.css";

export default function BorrowPage() {
  const [formData, setFormData] = useState({
    memberName: "",
    bookTitle: "",
    borrowDate: "",
    returnDate: "",
    memberId: "",
    bookId: ""
  });

  const [selectedBook, setSelectedBook] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const borrowing = {
      memberId: parseInt(formData.memberId),
      bookId: parseInt(formData.bookId),
      borrowDate: formData.borrowDate,
      returnDate: formData.returnDate,
      status: "borrowed"
    };

    try {
      const response = await fetch("http://localhost:5000/api/v1/borrowings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(borrowing)
      });

      if (!response.ok) throw new Error("Failed to create borrowing");

      const result = await response.json();
      setSubmittedData(result.data);
      alert(" Borrowing record created successfully!");
      
      // Reset form
      setFormData({
        memberName: "",
        bookTitle: "",
        borrowDate: "",
        returnDate: "",
        memberId: "",
        bookId: ""
      });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="page">
      <h1>Borrow a Book</h1>
      
      <form onSubmit={handleSubmit} className="borrow-form">
        <div className="form-group">
          <label>Member Name:</label>
          <input
            type="text"
            name="memberName"
            value={formData.memberName}
            onChange={handleChange}
            placeholder="Enter member name"
            required
          />
        </div>

        <div className="form-group">
          <label>Member ID:</label>
          <input
            type="number"
            name="memberId"
            value={formData.memberId}
            onChange={handleChange}
            placeholder="Enter member ID"
            required
          />
        </div>

        <div className="form-group">
          <label>Book Title:</label>
          <input
            type="text"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            placeholder="Enter book title"
            required
          />
        </div>

        <div className="form-group">
          <label>Book ID:</label>
          <input
            type="number"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            placeholder="Enter book ID"
            required
          />
        </div>

        <div className="form-group">
          <label>Borrow Date:</label>
          <input
            type="date"
            name="borrowDate"
            value={formData.borrowDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Return Date:</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Borrowing</button>
      </form>

      {/* Display submitted data as state changes */}
      {formData.memberName && (
        <div className="form-preview">
          <h3>Preview:</h3>
          <p><strong>Member:</strong> {formData.memberName}</p>
          <p><strong>Book:</strong> {formData.bookTitle}</p>
          <p><strong>Borrow Date:</strong> {formData.borrowDate}</p>
          <p><strong>Return Date:</strong> {formData.returnDate}</p>
        </div>
      )}

      {submittedData && (
        <div className="success-message">
          <h3>Borrowing Record Created!</h3>
          <p>ID: {submittedData.id}</p>
          <p>Status: {submittedData.status}</p>
        </div>
      )}
    </div>
  );
}