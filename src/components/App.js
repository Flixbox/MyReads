import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { HashRouter as Router } from "react-router-dom"

import Navigation from './Navigation'
import MainView from './MainView'

import theme from '../theme.js'

/**
 * The main app that contains the entire page.
 * This also contains the theme provider.
 *
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
    render() {
        console.log("public url", process.env.PUBLIC_URL)

        return (
            <MuiThemeProvider theme={theme}>
                <Router basename={process.env.PUBLIC_URL}>
                    <Navigation/>
                    <MainView/>
                </Router>
            </MuiThemeProvider>
        )
    }
}