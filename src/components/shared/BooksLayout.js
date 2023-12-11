import { useState } from "react";
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";

export function BooksLayout() {

    // const [number, setNumber] = useState(3);
    const [searchParams, setSearchParams] = useSearchParams({ n:3 });
    const number = searchParams.get('n');

    return (
        <>
            <ul>
                <li><Link to="/books/1/5"  state="Hello Books!">Book 1</Link> </li>
                <li><Link to="/books/2/10"  state="Hello Books!">Book 2</Link> </li>
                <li><Link to="/books/3/1"  state="Hello Books!">Book 3</Link> </li>
                <li><Link to={`/books/${number}/1`}  state={`st@teOfBo0k- ${number}`}>Book {number}</Link> </li>
            </ul>

            {/* <ul>
                <li><NavLink to="/books/1/5"
                style={({ isActive }) => {
                    return isActive ? { color: "red" } : {}
                }}>Book 1</NavLink> </li>
                <li><NavLink to="/books/2/10"
                 style={({ isActive }) => {
                    return isActive ? { color: "red" } : {}
                }}>Book 2</NavLink> </li>
                <li><NavLink to="/books/3/1"
                 style={({ isActive }) => {
                    return isActive ? { color: "red" } : {}
                }}>Book 3</NavLink> </li>
            </ul> */}

            <Link to="/books/new">Create New Book</Link>
            <Outlet context={{ hello: "World!" }} />

            <input type="number" value={ number} onChange={(e) => setSearchParams({ n: e.target.value })} />
        </>
    )
}