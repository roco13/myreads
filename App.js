import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookshelfClassifier from "./BookshelfClassifier";
import Search from "./Search";

function App() {
  let navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [showSearchPage, setShowSearchpage] = useState([]);

  useEffect( () => {
    
    getBooks();

  }, [])
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
   // console.log("res = ", res)
    setBooks(res);
  }

  const updateBook = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);

      //const res = await BooksAPI.getAll();
    };
    update();
    //navigate("/");
  };


  const searchBook = (query) => {
    const search = async () => {
      const res = await BooksAPI.search(query);
      console.log("res in search", res)
      if(res === undefined || 'error' in res) {
        setShowSearchpage([])
      } else {
        setShowSearchpage(res)
      }
    
      console.log("showSearchPage = ",showSearchPage)
    };
    search();
  };


  return (

    <div className="app">

    <Routes>
      <Route
        exact
        path="/"
        element={ <BookshelfClassifier books={books}  updateBook= {updateBook}/>}
      />
      <Route path="/search" element={<Search showSearchPage={showSearchPage} searchBook={searchBook}   updateBook= {updateBook} /> } />
    </Routes> 

    </div>
  );
}

export default App;
