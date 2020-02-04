import { getRequest, postRequest } from "../helpers/api_helper"

export const initializeAppState = () => dispatch => {
    dispatch(updateInvoices())
    dispatch(updateCustomers())
}

export const createInvoice = values => async dispatch => {
    const result = await postRequest("/invoices/new", values)

    if (result.status !== "success") {
        console.warn("creating invoice failed")
        return false
    }
    
    dispatch(updateInvoices())
}

export const createCustomer = values => async dispatch => {
    const result = await postRequest("/customers/new", values)

    if (result.status !== "success") {
        console.warn("creating customer failed")
        return false
    }

    dispatch(updateCustomers())
}

export const editCustomer = (id, values) => async dispatch => {
    const result = await postRequest(`/customers/${id}/edit`, values)

    if (result.status !== "success") {
        console.warn("editing customer failed")
        return false
    }

    dispatch(updateCustomers())
}

export const updateInvoices = () => async dispatch => {
    const response = await getRequest("/invoices")

    dispatch({
        type: "UPDATE_INVOICES",
        invoices: response
    })
}

export const updateCustomers = () => async dispatch => {
    const response = await getRequest("/customers")

    dispatch({
        type: "UPDATE_CUSTOMERS",
        customers: response
    })
}
