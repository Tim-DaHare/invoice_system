import React from "react"
import { Link } from "react-router-dom"
import { createCustomer } from "../../../actions/app_actions"
import { Form, Field } from "react-final-form"

const CreateInvoicePage = ({ history }) => {
    
    const onSubmit = async values => {
        await createCustomer(values)
        // history.replace("/customers")
    }

    return (
        <>
            <div className="row justify-between items-center">
                <h1>Klant aanmaken</h1>
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
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <strong>Straat</strong><br />
                                <Field 
                                    name="street"
                                    component="input"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <strong>Huisnummer</strong><br />
                                <Field 
                                    name="house_number"
                                    component="input"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <strong>Postcode</strong><br />
                                <Field 
                                    name="postal_code"
                                    component="input"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <strong>Plaats</strong><br />
                                <Field 
                                    name="city"
                                    component="input"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <strong>BTW nummer</strong><br />
                                <Field 
                                    name="btw_number"
                                    component="input"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <strong>Email</strong><br />
                                <Field 
                                    name="email"
                                    component="input"
                                    type="text"
                                    required
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

export default CreateInvoicePage
