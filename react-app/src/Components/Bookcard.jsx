import "./Bookcard.css";

export default function Bookcard({ title, author, category, available }) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Category:</strong> {category}</p>
      <p className={`availability ${available ? "available" : "unavailable"}`}>
        {available ? "Available" : "Not Available"}
      </p>
    </div>
  );
}