// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/test-pages/About';
// import Book from './components/test-pages/Book';
import { Contact } from './components/test-pages/Contact';
// import { BookList } from './components/test-pages/BookList';
import { NotFound } from './components/test-pages/NotFound';
// import { NewBook } from './components/test-pages/NewBook';
// import { BooksLayout } from './components/shared/BooksLayout';
import { BooksRoute } from './components/shared/BooksRoute';

function App() {

  // const location = useLocation();
  // console.log("the location : ", location);


  return (

    // <Router>
      <div className="App">
        {/* <Routes location="/books"> Will always set the location to /books */}
        {/* <Routes>
          <Route path="/books" element={<h3>Book List Extra Contents ...</h3>} />
        </Routes> */}
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/books/*" element={<BooksRoute />} />

            {/* <Route path="/books" element={<BooksLayout />}>
              <Route index element={<BookList />} />
              <Route path=":id/:age" element={<Book />} />    
              <Route path="new" element={<NewBook />} /> 
            </Route>  */}

            {/* <Route path="/books" element={<BookList />} /> */}
            <Route path="/contact" element={<Contact />} />     
            <Route path="*" element={<NotFound />} />  
          </Routes>
        </div>
      </div>
    // </Router>

  );
}

export default App;
