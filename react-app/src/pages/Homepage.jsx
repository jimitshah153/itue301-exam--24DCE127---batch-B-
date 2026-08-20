export default function HomePage() {
  return (
    <div className="page">
      <h1>Welcome to Library Book Management System</h1>
      <p>This is a simple library management system built with React and Express.js</p>
      <div className="home-content">
        <div className="feature">
          <h3> Browse Books</h3>
          <p>View all available books in the library</p>
        </div>
        <div className="feature">
          <h3>Borrow Books</h3>
          <p>Create borrowing records for library members</p>
        </div>
        <div className="feature">
          <h3>Track Borrowings</h3>
          <p>Keep track of all borrowing activities</p>
        </div>
      </div>
    </div>
  );
}