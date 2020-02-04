import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./header"
import CustomersPage from "./pages/customers/customers_page"
import InvoicesPage from "./pages/invoices/invoices_page"
import CreateInvoicePage from "./pages/invoices/create_invoice_page"
// import EditInvoicePage from "./pages/invoices/edit_invoice_page"
import CreateCustomerPage from "./pages/customers/create_customer_page"
import EditCustomerPage from "./pages/customers/edit_customer_page"


const MainRouter = () => {
    return (
        <Router>
            <Header />
            <div className="page--container">
                <Switch>
                    <Route exact path="/" component={InvoicesPage} />
                    <Route exact path="/invoices/create" component={CreateInvoicePage} />
                    {/* <Route exact path="/invoices/edit/:1" component={EditInvoicePage} /> */}
                    <Route exact path="/customers" component={CustomersPage} />
                    <Route exact path="/customers/create" component={CreateCustomerPage} />
                    <Route exact path="/customers/edit/:id" component={EditCustomerPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default MainRouter