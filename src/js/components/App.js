import React, { useEffect } from "react"
import { connect } from "react-redux"
import MainRouter from "./main_router"
import { initializeAppState } from "../actions/app_actions"
import "../../scss/app.scss"

const App = ({ initializeAppState }) => {

    useEffect(initializeAppState, [])

    return (
        <div className="app">
            <MainRouter />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    initializeAppState: () => dispatch(initializeAppState())
})  

export default connect(null, mapDispatchToProps)(App)
