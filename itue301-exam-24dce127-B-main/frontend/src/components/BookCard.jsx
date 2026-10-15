function BookCard({
    title,
    author,
    category,
    available
}) {
    return (
        <div className="book-card">

            <div className="book-card-icon">
                📖
            </div>

            <div className="book-card-content">

                <span className="book-category">
                    {category}
                </span>

                <h3>{title}</h3>

                <p className="book-author">
                    By {author}
                </p>

                <div className="book-status">

                    {available ? (
                        <span className="available">
                            ● Available
                        </span>
                    ) : (
                        <span className="not-available">
                            ● Not Available
                        </span>
                    )}

                </div>

            </div>

        </div>
    );
}

export default BookCard;