import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./header"
import CustomersPage from "./pages/customers_page"
import InvoicesPage from "./pages/invoices_page"


const  MainRouter = () => {
    return (
        <Router>
            <Header />
            <div className="page--container">
                <Switch>
                    <Route path="/">
                        <InvoicesPage />
                    </Route>
                    <Route path="/customers">
                        <CustomersPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default MainRouter