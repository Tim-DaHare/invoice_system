import React from "react"
import { Link } from "react-router-dom"
import InvoiceForm from "../../forms/invoice_form"

const onSubmit = values => {
    console.log(values)
}

const CreateInvoicePage = () => {

    return (
        <React.Fragment>
            <div className="row justify-between items-center">
                <h1>Facatuur aanmaken</h1>
                <Link to="/">Terug naar overzicht</Link>
            </div>
            <hr />

            <InvoiceForm 
                onSubmit={onSubmit}
            />

        </React.Fragment>
    )
}

export default CreateInvoicePage
