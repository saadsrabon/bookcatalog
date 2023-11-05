import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import './index.css'

import { store } from './redux/store/store'
import router from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>

    

  </React.StrictMode>,
)
