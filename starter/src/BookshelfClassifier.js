import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

const BookshelfClassifier = ({books, updateBook}) => {
    
    let booksInCurrentlyReading =  books.filter( (book) => book.shelf === "currentlyReading");
    let booksInRead = books.filter( (book) => book.shelf === "read");
    let booksInWantToRead = books.filter( (book) => book.shelf === "wantToRead");

    return (
        
         <div className="list-books">
         <div className="list-books-title">
           <h1>MyReads</h1>
         </div>
         <div className="list-books-content">
           <div>
            <Bookshelf  booklist={booksInCurrentlyReading} category="Currently Reading" /* shelf="currentlyReading" */ updateBook={updateBook}  />
            <Bookshelf  booklist={booksInWantToRead} category="Want to Read" /* shelf="wantToRead"  */updateBook={updateBook} />
            <Bookshelf  booklist={booksInRead} category="Read" /* shelf="read" */ updateBook={updateBook} />
           </div>
         </div>
         <div className="open-search">
           <Link to="/search" className="add-contact">Add a book</Link>
         </div>
       </div>
    )

}
BookshelfClassifier.propTypes = {
    books: PropTypes.array.isRequired, 
    updateBook: PropTypes.func.isRequired,
}
export default BookshelfClassifier;
