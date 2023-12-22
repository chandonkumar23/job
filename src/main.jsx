import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';
import AuthProvuder from './AuthProvter.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
<div className='max-w-[1520px] mx-auto'>
<AuthProvuder>
<RouterProvider router={router}/>
</AuthProvuder>
</div>
   
    <App />
  </React.StrictMode>,
)
