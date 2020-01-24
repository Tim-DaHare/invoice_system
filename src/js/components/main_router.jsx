import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./header"
import CustomersPage from "./pages/customers/customers_page"
import InvoicesPage from "./pages/invoices/invoices_page"
import CreateInvoicePage from "./pages/invoices/create_invoice_page"
import EditInvoicePage from "./pages/invoices/edit_invoice_page"

const  MainRouter = () => {
    return (
        <Router>
            <Header />
            <div className="page--container">
                <Switch>
                    <Route exact path="/">
                        <InvoicesPage />
                    </Route>
                    <Route exact path="/invoices/create">
                        <CreateInvoicePage />
                    </Route>
                    <Route exact path="/invoices/edit/:1">
                        <EditInvoicePage />
                    </Route>
                    <Route exact path="/customers">
                        <CustomersPage />
                    </Route>           
                </Switch>
            </div>
        </Router>
    )
}

export default MainRouter