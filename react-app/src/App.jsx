import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Bookpage from "./pages/Bookpage";
import Borrowpage from "./pages/Borrowpage";
import Navigation from "./Components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />pm install dotenv
          <Route path="/books" element={<BooksPage />} />
          <Route path="/borrow" element={<BorrowPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;