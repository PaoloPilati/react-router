import { NavLink } from "react-router-dom";

export default function Navbar () {
    return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">

            <div className="navbar-brand">
                <NavLink to="/" className="navbar-brand">
                    <img src="*"/>
                </NavLink> 
            </div>
            <div className="navbar-nav">
                   
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/prodotti" className="nav-link">Prodotti</NavLink>
                <NavLink to="/chi-siamo" className="nav-link">Chi siamo</NavLink>

            </div>

  </div>
</nav>

}