import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { Navigation } from './Navigation'
import { MainView } from './MainView'

import theme from '../theme.js'

class App extends Component {
    render() {
        return (
        <MuiThemeProvider theme={theme}>
            <Navigation/>
            <MainView/>
        </MuiThemeProvider>
        )
    }
}

export default App
