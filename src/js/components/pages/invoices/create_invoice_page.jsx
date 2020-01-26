import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { createInvoice } from "../../../actions/app_actions"
import InvoiceForm from "../../forms/invoice_form"

const CreateInvoicePage = ({ createInvoice }) => {
    
    const onSubmit = async values => {
        console.log("submit", values)
        await createInvoice(values)
    }

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

const mapDispatchToProps = dispatch => ({
    createInvoice: values => dispatch(createInvoice(values))
})

export default connect(null, mapDispatchToProps)(CreateInvoicePage)