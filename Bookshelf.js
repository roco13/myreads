import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({booklist, category, /* shelf,  */updateBook}) => {
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{category}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                    booklist.map( (book) =>  <Book key={book.id} book= {book} /* shelf={shelf} */ updateBook= {updateBook}/> )
                    }
                </ol>
            </div>
        </div>
    )
    
}

Bookshelf.propTypes = {
    booklist: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    //shelf: PropTypes.string.isRequired,
    updateBook: PropTypes.func.isRequired,
}
export default Bookshelf;


