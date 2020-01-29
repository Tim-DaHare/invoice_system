import React from "react"
import { Form, Field } from "react-final-form"
import InvoiceRowsBuilder from "../fields/invoice-rows-builder.jsx"

const InvoiceForm = ({ onSubmit, initialValues = null }) => {

    return (
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Field 
                            name="invoice_number" 
                            component="input" 
                            type="text" 
                            initialValue="19K0011"
                        />
                    </div>
                    <div className="form-group">
                        <strong>Klant</strong><br />
                        <Field name="customer_id" component="select" defaultValue="1">
                            <option value="1">Jan Dijkman bv</option>
                        </Field>
                    </div>
                    <div className="form-group">
                        <strong>Nota Type</strong><br />
                        <Field name="invoice_type" component="select" defaultValue="0">
                            <option value={0}>Inkoopnota</option>
                            <option value={1}>Verkoopnota</option>
                        </Field>
                    </div>
                    <div className="form-group">
                        <strong>Factuur inhoud</strong><br />
                        <Field name="invoice_flavour" component="select" defaultValue="0">
                            <option value={0}>Kalveren</option>
                            <option value={1}>Runderen</option>
                            <option value={2}>Wolvee</option>
                            <option value={3}>Vrije invoer</option>
                        </Field>
                    </div>
                    <div className="form-group">
                        <strong>BTW percentage</strong><br />
                        <Field name="btw_percentage" component="select" defaultValue="0">
                            <option value="0">0%</option>
                            <option value="9">9%</option>
                            <option value="21">21%</option>
                        </Field>
                    </div>
                    <div className="form-group">
                        <strong>Leverdatum</strong><br />
                        <Field name="delivery_date" component="input" type="date" initialValue="2020-01-26"/>
                    </div>
                    {parseInt(values.invoice_flavour) === 1 &&
                        <div className="form-group">
                            <strong>UBN nummer</strong><br />
                            <Field 
                                name="ubn_number" 
                                component="input" 
                                type="text"
                            />
                        </div>
                    }
                    <div className="form-group">
                        <strong>Inhoud</strong><br />
                        <Field 
                            name="invoice_rows" 
                            component={InvoiceRowsBuilder} 
                            invoiceFlavour={parseInt(values.invoice_flavour)} 
                            // initialValue={[{}, {}]} 
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Opslaan</button>
                    </div>
                </form>
            )}
        />
    )
}

export default InvoiceForm