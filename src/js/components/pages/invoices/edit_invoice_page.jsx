import React from "react"
import { Link } from "react-router-dom"

const EditInvoicePage = () => {

    return (
        <React.Fragment>
            <div className="row justify-between items-center">
                <h1>Facatuur wijzigen</h1>
                <Link to="/">Terug naar overzicht</Link>
            </div>
            <hr />

        </React.Fragment>
    )
}

export default EditInvoicePage
