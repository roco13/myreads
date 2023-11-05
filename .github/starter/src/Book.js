import PropTypes from "prop-types";
import UpdateBook from "./UpdateBook";

const Book = ({book, updateBook}) => {

    //handle error when there is no thumbnail image
    let bgImg= "none";
    try {
        bgImg = book.imageLinks.thumbnail;
    } catch (error) {
        console.error("Error In Catch Statement: There is no thumbnail image");
    }

    return (
        <li>
            <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url("${bgImg}")`,
                }}
                ></div>
                <div className="book-shelf-changer">
                <UpdateBook book={book}  onUpdate={updateBook} />
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
};

export default Book;