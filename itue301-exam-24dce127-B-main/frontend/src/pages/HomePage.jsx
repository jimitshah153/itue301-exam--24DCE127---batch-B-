import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>

            {/* HERO SECTION */}
            <section className="hero">

                <div className="hero-content">

                    <div className="hero-text">

                        <span className="hero-badge">
                            📚 College Library System
                        </span>

                        <h1>
                            Discover Your Next
                            <span> Great Read.</span>
                        </h1>

                        <p>
                            Explore our collection of books, find your
                            favorite titles and borrow them easily through
                            our digital library management system.
                        </p>

                        <div className="hero-buttons">

                            <Link
                                to="/books"
                                className="primary-button"
                            >
                                Explore Books →
                            </Link>

                            <Link
                                to="/borrow"
                                className="secondary-button"
                            >
                                Borrow a Book
                            </Link>

                        </div>

                    </div>

                    <div className="hero-image">

                        <div className="book-stack">
                            <div className="book book-one">
                                📘
                            </div>

                            <div className="book book-two">
                                📕
                            </div>

                            <div className="book book-three">
                                📗
                            </div>

                            <div className="book-circle">
                                📚
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            {/* FEATURES */}

            <section className="features-section">

                <div className="section-heading">
                    <span>WHY USE OUR LIBRARY?</span>
                    <h2>Everything You Need in One Place</h2>
                </div>

                <div className="feature-grid">

                    <div className="feature-card">
                        <div className="feature-icon">📚</div>

                        <h3>Large Collection</h3>

                        <p>
                            Browse books from different categories
                            and subjects.
                        </p>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>

                        <h3>Quick Borrowing</h3>

                        <p>
                            Borrow books quickly using our simple
                            digital system.
                        </p>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon">🔎</div>

                        <h3>Easy Access</h3>

                        <p>
                            Find book information and availability
                            whenever you need it.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default HomePage;