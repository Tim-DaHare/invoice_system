import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const CustomersPage = ({ customers }) => {

    return (
        <>
            <div className="row justify-between items-center">
                <h1>Klanten</h1>
                <Link to="customers/create">Klant toevoegen</Link>
            </div>
            <hr />

            {customers.length <= 0 &&
                <h2>Er zijn momenteel geen nota's</h2>
            }

            {customers.length > 0 && 
                <table className="invoice-list--table">
                    <thead>
                        <tr>
                            <th>
                                Klant
                            </th>
                            <th>
                                Plaats
                            </th>
                            <th>
                                BTW nummer
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, i) => (
                            <tr className="invoice-listitem--table-row" key={i}>
                                <td>
                                    <Link to={`customers/edit/${customer.id}`}>{customer.company_name}</Link>
                                </td>
                                <td>
                                    {customer.city}
                                </td>
                                <td>
                                    {customer.btw_number}
                                </td>
                                <td>
                                    {customer.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </>
    )
}

const mapStateToProps = state => ({
    customers: state.app.customers
})

export default connect(mapStateToProps)(CustomersPage)
