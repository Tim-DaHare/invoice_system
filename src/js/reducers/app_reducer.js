const initialState = {
    invoices: [],
    customers: []
}

const app = (state = initialState, action) => {
    switch (action.type) {
    case "UPDATE_INVOICES":
        return {
            ...state,
            invoices: action.invoices
        }
    case "UPDATE_CUSTOMERS":
        return {
            ...state,
            customers: action.customers
        }
    default:
        return state
    }
}

export default app