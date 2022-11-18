import Bookshelf from "./Bookshelf";


const Shelf = ({books}) => {
    const booksInCurrentlyReading =  books.filter( (book) => book.shelf === "currentlyReading");
    const booksInRead = books.filter( (book) => book.shelf === "read");
    const booksInWantToRead = books.filter( (book) => book.shelf === "wantToRead");

    return (
        // <div>
        // <Bookshelf booklist={booksInCurrentlyReading} category="currentlyReading"/>
        //         <Bookshelf booklist={booksInRead} category="read"/>
        //         <Bookshelf booklist={booksInWantToRead} category="wantToRead"/>
        // </div>


        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf books={books} />
                <Bookshelf booklist={booksInCurrentlyReading} category="currentlyReading"/>
                <Bookshelf booklist={booksInRead} category="read"/>
                <Bookshelf booklist={booksInWantToRead} category="wantToRead"/>
              </div>
            </div>
            <div className="open-search">
              {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
              {/* <Link to="/search" className="add-contact">Add a book</Link> */}
            </div>
        </div>
    )
}

export default Shelf;