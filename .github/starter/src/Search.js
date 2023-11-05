import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const Search = ({ books,  updateBook}) => {
    
  const [query, setQuery] = useState("");
  const [showSearchPage, setShowSearchpage] = useState([]);
    
  const searchBook = (query) => {
    const search = async () => {
      const res = await BooksAPI.search(query);
      if(res === undefined || 'error' in res) {
        setShowSearchpage([]);
      } else {
        res.forEach( (currBook) =>{
          for(let book of books) {
            if(book.id === currBook.id) {
            currBook.shelf = book.shelf;
            currBook = {...currBook, shelf:book.shelf};
            } else {
              currBook.shelf = "none";
            };
          };
        });
        setShowSearchpage(res);
      };
    };
    search();
  };
     
  const updateQuery = (query) => {
    setQuery(query);
    searchBook(query);
  };

  return (       
      <div className="search-books">
          <div className="search-books-bar">
              <Link className="close-search" to="/" />
              <div className="search-books-input-wrapper">
              <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  value={query}
                  onChange={(event) => updateQuery(event.target.value)}
              />
              </div>
          </div>
          <div className="search-books-results">
              <ol className="books-grid">
                {
                  showSearchPage.map( (book) =>  {
                    return <Book key={book.id} book= {book}  updateBook={updateBook} />
                  })
                }    
              </ol>
          </div>
      </div>        
  )
};

Search.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired,
};

export default Search;