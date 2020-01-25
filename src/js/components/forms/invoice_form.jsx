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
                        <p><strong>Nota: </strong>19K0011</p>
                    </div>
                    <div className="form-group">
                        <strong>Klant</strong><br />
                        <Field name="customer_id" component="select">
                            <option>Cono</option>
                        </Field>
                    </div>
                    <div className="form-group">
                        <strong>Klant</strong><br />
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
                        <strong>Betreffent vee</strong><br />
                        <Field 
                            name="rows" 
                            component={InvoiceRowsBuilder} 
                            invoiceFlavour={values.invoice_flavour} 
                            // initialValue={[{}, {}]} 
                        />
                    </div>
                </form>
            )}
        />
    )
}

export default InvoiceForm