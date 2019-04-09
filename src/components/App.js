import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
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
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <Navigation/>
                        <MainView/>
                    </Router>
                </MuiThemeProvider>
            </div>
        )
    }
}