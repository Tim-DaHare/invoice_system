import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./reducers/app_reducer"

const rootReducer = combineReducers({
    app: appReducer
})

let store = configureStore({
    reducer: rootReducer
})

export default store