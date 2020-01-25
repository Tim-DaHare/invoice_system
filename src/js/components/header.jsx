import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="header--container justify-between">
            <h1>Jaap de Haas veehandel</h1>
            <div>
                <Link to="/">Facatures</Link>
                <Link to="/customers">Klanten</Link>
            </div>
        </nav>
    )
}

export default Header
