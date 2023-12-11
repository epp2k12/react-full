import { Route, Routes } from 'react-router-dom';
import { BookList } from '../test-pages/BookList';
import { NewBook } from '../test-pages/NewBook';
import Book from '../test-pages/Book';
import { BooksLayout } from './BooksLayout';

export function BooksRoute() {
    return (
        <>
        {/* <BooksLayout /> */}
        <Routes>
            <Route element={<BooksLayout />}>
                <Route index element={<BookList />} />
                <Route path=":id/:age" element={<Book />} />
                <Route path="new" element={<NewBook />} />
            </Route>
        </Routes>
        </>

    )
}