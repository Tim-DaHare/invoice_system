import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const InvoicesPage = ({ invoices }) => {

    return (
        <React.Fragment>
            <div className="row justify-between items-center">
                <h1>Facaturen</h1>
                <Link to="invoices/create">Facature aanmaken</Link>
            </div>
            <hr />

            {invoices.length <= 0 &&
                <h2>Er zijn momenteel geen nota's</h2>
            }

            {invoices.length > 0 && 
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
                                    <Link to={`invoices/edit/${invoice.id}`}>VOF Spaarman</Link>
                                </td>
                                <td>
                                    {invoice.invoice_number}
                                </td>
                                <td>
                                    {invoice.invoice_type === 0 && "Inkoop"}
                                    {invoice.invoice_type === 1 && "Verkoop"}
                                </td>
                                <td>
                                    {invoice.btw_percentage}%
                                </td>
                                <td>
                                    {invoice.invoice_flavour === 0 && "Kalveren"}
                                    {invoice.invoice_flavour === 1 && "Runderen"}
                                    {invoice.invoice_flavour === 2 && "Wolvee"}
                                    {invoice.invoice_flavour === 3 && "Vrije invoer"}
                                </td>
                                <td>
                                    <a href={`http://localhost:8000/invoices/pdf/${invoice.id}`}>Downloaden</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    invoices: state.app.invoices
})

export default connect(mapStateToProps)(InvoicesPage)
