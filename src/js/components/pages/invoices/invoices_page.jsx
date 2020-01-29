import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { updateInvoices } from "../../../actions/app_actions"

const InvoicesPage = ({ invoices, updateInvoices }) => {

    useEffect(() => {
        updateInvoices()
    }, [])

    return (
        <React.Fragment>
            <div className="row justify-between items-center">
                <h1>Facaturen</h1>
                <Link to="invoices/create">Facature aanmaken</Link>
            </div>
            <hr />

            <table className="invoice-list--table">
                <thead>
                    <tr>
                        <th>
                            Klantnaam
                        </th>
                        <th>
                            Notanummer
                        </th>
                        <th>
                            Type nota
                        </th>
                        <th>
                            BTW
                        </th>
                        <th>
                            Inhoud
                        </th>
                        <th>
                            PDF
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, i) => (
                        <tr className="invoice-listitem--table-row" key={i}>
                            <td>
                                <Link to={`invoices/edit/${invoice.customer_id}`}>VOF Spaarman</Link>
                            </td>
                            <td>
                                {invoice.delivery_date}
                            </td>
                            <td>
                                {invoice.invoice_type === 0 && "Inkoop"}
                                {invoice.invoice_type === 1 && "Verkoop"}
                            </td>
                            <td>
                                {invoice.btw_percentage}%
                            </td>
                            <td>
                                {invoice.invoice_type === 0 && "Kalveren"}
                                {invoice.invoice_type === 1 && "Runderen"}
                                {invoice.invoice_type === 2 && "Wolvee"}
                                {invoice.invoice_type === 3 && "Vrije invoer"}
                            </td>
                            <td>
                                <a href={`http://localhost:8000/invoices/pdf/${invoice.id}`}>Downloaden</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    invoices: state.app.invoices
})

const mapDispatchToProps = dispatch => ({
    updateInvoices: () => dispatch(updateInvoices())
})

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesPage)
