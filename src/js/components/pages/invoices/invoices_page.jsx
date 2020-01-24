import React from "react"
import { Link } from "react-router-dom"

const InvoicesPage = () => {

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
                            Datum
                        </th>
                        <th>
                            Totaalbedrag
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="invoice-listitem--table-row">
                        <td>
                            <Link to="invoices/edit/1">VOF Spaarman</Link>
                        </td>
                        <td>
                            24 Januari 2020
                        </td>
                        <td>
                            € 650,00
                        </td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default InvoicesPage
