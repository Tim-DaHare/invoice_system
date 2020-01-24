import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="header--container">
            <h1>Jaap de Haas veehandel</h1>
            <Link to="/">Facatures</Link>
            <Link to="/customers">Klanten</Link>
        </nav>
    )
}

export default Header
