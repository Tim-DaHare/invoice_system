import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { editCustomer } from "../../../actions/app_actions"
import { Form, Field } from "react-final-form"

const EditCustomerPage = ({ editCustomer, customers, match }) => {
    const [customer] = useState(customers.find(customer => customer.id === parseInt(match.params.id)))
    
    const onSubmit = async values => {
        await editCustomer(customer.id, values)
        // history.replace("/customers")
    }

    return (
        <>
            <div className="row justify-between items-center">
                <h1>Klant wijzigen</h1>
                <Link to="/customers">Terug naar overzicht</Link>
            </div>
            <hr />

            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <strong>Bedrijfsnaam/Klantnaam</strong><br />
                                <Field 
                                    name="company_name"
                                    component="input"
                                    type="text"
                                    initialValue={customer.company_name}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <strong>Straat</strong><br />
                                <Field 
                                    name="street"
                                    component="input"
                                    type="text"
                                    initialValue={customer.street}
                                />
                            </div>
                            <div className="form-group">
                                <strong>Huisnummer</strong><br />
                                <Field 
                                    name="house_number"
                                    component="input"
                                    type="text"
                                    initialValue={customer.house_number}
                                />
                            </div>
                            <div className="form-group">
                                <strong>Postcode</strong><br />
                                <Field 
                                    name="postal_code"
                                    component="input"
                                    type="text"
                                    initialValue={customer.postal_code}
                                />
                            </div>
                            <div className="form-group">
                                <strong>Plaats</strong><br />
                                <Field 
                                    name="city"
                                    component="input"
                                    type="text"
                                    initialValue={customer.city}
                                />
                            </div>
                            <div className="form-group">
                                <strong>BTW nummer</strong><br />
                                <Field
                                    name="btw_number"
                                    component="input"
                                    type="text"
                                    initialValue={customer.btw_number}
                                />
                            </div>
                            <div className="form-group">
                                <strong>Email</strong><br />
                                <Field
                                    name="email"
                                    component="input"
                                    type="text"
                                    initialValue={customer.email}
                                />
                            </div>
                            
                            <div className="form-group">
                                <button type="submit">Opslaan</button>
                            </div>
                        </form>
                    )
                }}
            />
        </>
    )
}

const mapStateToProps = state => ({
    customers: state.app.customers
})

const mapDispatchToProps = dispatch => ({
    editCustomer: (id, values) => dispatch(editCustomer(id, values))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomerPage)
