const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>Bawing's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/crate" style={{ 
                    color: "#ffffff",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default NavBar;