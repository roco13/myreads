import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Search = ({showSearchPage, searchBook, updateBook}) => {

    const [query, setQuery] = useState("");
    
    

    const updateQuery = (query) => {
        setQuery(query);
        searchBook(query)
       
        showSearchPage && showSearchPage.map((book) => <li>{book.title}</li>)
    
        console.log("showSearchPage", showSearchPage)
       
            // if(showSearchPage || showSearchPage.lenght > 0){
            //     showSearchPage.map( (book) => book.title)
            // }
    
        
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
                Results
            {
            console.log("showSearchPage in the router", showSearchPage)
            }
            {
                showSearchPage.map( (book) =>  <Book key={book.id} book= {book} shelf="" updateBook={updateBook} /> )
            }
    
                </ol>
            </div>
        </div>
        
    )
}
Search.propTypes = {
    showSearchPage: PropTypes.array.isRequired,
    searchBook: PropTypes.func.isRequired,
    updateBook: PropTypes.func.isRequired
}
export default Search;