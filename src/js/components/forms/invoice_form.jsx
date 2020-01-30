import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Form, Field } from "react-final-form"
import InvoiceRowsBuilder from "../fields/invoice-rows-builder"

const InvoiceForm = ({ onSubmit, initialValues = null, customers, invoices }) => {
    const [invoiceNumber, setInvoiceNumber] = useState(null)

    const onChangeInvoiceFlavour = e => {
        const value = e.target.value
        const lastInvoiceOfType = invoices.find(invoice => invoice.invoice_flavour == value)

        if (!lastInvoiceOfType) {
            setInvoiceNumber("")
            return
        }

        console.log("last invoice number", lastInvoiceOfType.invoice_number)

        let typeChar
        switch(value) {
        case "0":
            typeChar = "K"
            break
        case "1":
            typeChar = "R"
            break
        case "2":
            typeChar = "W"
            break
        case "3":
            typeChar = "V"
            break
        }

        const newInvoiceNumber = `20${typeChar}0000`
        console.log(newInvoiceNumber)
    }

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
                        <Field name="customer_id" component="select" required>
                            <option key={-1} value="">Selecteer een klant</option>
                            {customers.map((customer, i) => (
                                <option key={i} value={customer.id}>{customer.company_name}</option>
                            ))}
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
                        <Field name="invoice_flavour" component="select" defaultValue="0"  onChange={onChangeInvoiceFlavour}>
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
                        <Field name="delivery_date" component="input" type="date" required/>
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

const mapStateToProps = state => ({
    customers: state.app.customers,
    invoices: state.app.invoices
})

export default connect(mapStateToProps)(InvoiceForm)