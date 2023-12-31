import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>Someone's Blog</h1>
            <div className="links">

                <a href="/">Home</a>
                <a href="/create" style={{ 
                    color: "#ffffff",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
                <br></br>
                <br></br>
                <ul>
                    <li><NavLink to="/about" state="Hello React!" >About</NavLink></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </div>
        </nav>
    );
}
 
export default NavBar;