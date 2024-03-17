import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FirstComponent } from './firstComponent';
// import { ContadorApp } from './ContadorApp';
// import { Listado } from './Listado';
import { UsersApp } from "/src/UsersApp";
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstComponent/> */}
    {/* <ContadorApp value={0}/> */}
    {/* <Listado  /> */}
    <UsersApp></UsersApp>
  </React.StrictMode>,
)
