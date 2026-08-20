import { useState, useEffect } from "react";
import Bookcard from "../Components/Bookcard";
import "./Bookpage.css";

export default function Bookpage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:5000/api/v1/books");
      
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      
      const result = await response.json();
      setData(result.data);
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="page"><div className="loading"> Loading books...</div></div>;
  }

  if (error) {
    return <div className="page"><div className="error"> Error: {error}</div></div>;
  }

  return (
    <div className="page">
      <h1> Library Books</h1>
      <button onClick={fetchBooks} className="refresh-btn"> Refresh</button>
      <div className="books-grid">
        {data.map((book) => (
          <Bookcard
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            available={book.available}
          />
        ))}
      </div>
    </div>
  );
}