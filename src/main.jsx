import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Details} from './pages/Details'
// import {SignIn} from './pages/SignIn'
import {Home} from './pages/Home'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home />
      {/* <SignIn /> */}
      {/* <Details /> */}
    </ThemeProvider>
  </React.StrictMode>,
)
