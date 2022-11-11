import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'

import {TransactionProvider} from './context/TransactionsContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )


ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
)