import { NavLink } from "react-router";

export default function Navbar () {
    return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">

            <NavLink to="/" className="navbar-brand">
                <img src="https://fakestoreapi.com/icons/logo.png" alt="logo" />
            </NavLink> 

            <div className="navbar-nav">
                   
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/prodotti" className="nav-link">Prodotti</NavLink>
                <NavLink to="/chi-siamo" className="nav-link">Chi siamo</NavLink>

            </div>
        </div>
    </nav>
    )
}