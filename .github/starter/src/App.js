import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookshelfClassifier from "./BookshelfClassifier";
import Search from "./Search";

function App() {  

  const [books, setBooks] = useState([]);

  useEffect( () => {    
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  const updateBook = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);
      const res = await BooksAPI.getAll();
      setBooks(res)
    };
    update();    
  };

  return (    
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={ <BookshelfClassifier books={books} updateBook= {updateBook}/>}
        />
        <Route 
        path="/search" 
        element={<Search books={books} updateBook= {updateBook} /> } />
      </Routes> 
    </div>
  );
};

export default App;