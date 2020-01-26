import { getRequest, postRequest } from "../helpers/api_helper"

export const createInvoice = values => async () => {
    const result = await postRequest("/invoices/new", values)
    console.log(result)
    if (result.status !== "success") {
        console.warn("creating invoice failed")
        return false
    }
    
    // console.log("post request sent")
}

export const updateInvoices = () => async dispatch => {
    const response = await getRequest("/invoices")

    dispatch({
        type: "UPDATE_INVOICES",
        invoices: response
    })
}