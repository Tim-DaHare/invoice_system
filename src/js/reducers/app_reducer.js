const initialState = {
    invoices: []
}

const app = (state = initialState, action) => {
    switch (action.type) {
    case "UPDATE_INVOICES":
        return {
            ...state,
            invoices: action.invoices
        }
    default:
        return state
    }
}

export default app