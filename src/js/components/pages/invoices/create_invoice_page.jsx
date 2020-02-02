import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { createInvoice } from "../../../actions/app_actions"
import { Form, Field } from "react-final-form"
import InvoiceRowsBuilder from "../../fields/invoice-rows-builder"

const CreateInvoicePage = ({ invoices, customers, createInvoice, history }) => {
    
    const onSubmit = async values => {
        await createInvoice(values)
        history.replace("/invoices")
    }

    const recalculateInvoiceNumber = form => {
        const formValues = form.getState().values

        if (!formValues.delivery_date) return
        
        const type = formValues.invoice_type
        const lastInvoiceOfType = invoices.find(invoice => invoice.invoice_type == type)

        if (!lastInvoiceOfType) {
            return
        }

        const typeChar = type == 0 ? "I" : "V"

        const deliveryDateYear = new Date(formValues.delivery_date).getFullYear().toString().slice(-2)
        const incrementedNumber = (parseInt(lastInvoiceOfType.invoice_number.slice(-4)) + 1).toString().padStart(4, "0")

        const newInvoiceNumber = `${deliveryDateYear}${typeChar}${incrementedNumber}`

        form.change("invoice_number", newInvoiceNumber)
    }

    return (
        <React.Fragment>
            <div className="row justify-between items-center">
                <h1>Facatuur aanmaken</h1>
                <Link to="/">Terug naar overzicht</Link>
            </div>
            <hr />

            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, values }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <strong>Leverdatum</strong><br />
                                <Field 
                                    name="delivery_date"
                                    onChange={() => recalculateInvoiceNumber(form)}
                                    render={({ input, onChange }) => (
                                        <input
                                            type="date"
                                            required
                                            onChange={e => {
                                                input.onChange(e.target.valueAsDate)
                                                if (onChange) onChange(e)
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div className="form-group">
                                <strong>Nota Type</strong><br />
                                <Field 
                                    name="invoice_type"
                                    defaultValue="0" 
                                    onChange={() => recalculateInvoiceNumber(form)}
                                    render={({input, onChange}) => (
                                        <select 
                                            onChange={e => {
                                                input.onChange(e.target.value)
                                                if (onChange) onChange(e)
                                            }}
                                        >
                                            <option value="0">Inkoopnota</option>
                                            <option value="1">Verkoopnota</option>
                                        </select>
                                    )}
                                />
                            </div>
                            <div className="form-group">
                                <strong>Nota nummer</strong><br />
                                <Field 
                                    name="invoice_number"
                                    component="input"
                                    type="text"
                                    required
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
                            {parseInt(values.invoice_type) === 0 &&
                                <div className="form-group">
                                    <strong>Factuur inhoud</strong><br />
                                    <Field name="invoice_flavour" component="select" defaultValue="0">
                                        <option value={0}>Kalveren</option>
                                        <option value={1}>Runderen</option>
                                        <option value={2}>Wolvee</option>
                                        <option value={3}>Vrije invoer</option>
                                    </Field>
                                </div>
                            }
                            {parseInt(values.invoice_type) === 1 &&
                                <div className="form-group">
                                    <strong>Betreft</strong><br />
                                    <Field 
                                        name="regarding"
                                        component="input"
                                        type="text"
                                    />
                                </div>
                            }
                            <div className="form-group">
                                <strong>BTW percentage</strong><br />
                                <Field name="btw_percentage" component="select" defaultValue="0">
                                    <option value="0">0%</option>
                                    <option value="9">9%</option>
                                    <option value="21">21%</option>
                                </Field>
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
                                    invoiceType={parseInt(values.invoice_type)}
                                    invoiceFlavour={parseInt(values.invoice_flavour)}
                                />
                            </div>
                            
                            <div className="form-group">
                                <button type="submit">Opslaan</button>
                            </div>
                        </form>
                    )
                }}
            />
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    customers: state.app.customers,
    invoices: state.app.invoices
})

const mapDispatchToProps = dispatch => ({
    createInvoice: values => dispatch(createInvoice(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateInvoicePage)
