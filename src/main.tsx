import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'
import './index.css'

const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
  },
})

export default theme

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Router>
)
