import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { App } from './App'
import CounterApp from './CounterApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App title={'Hola, soy Goku'} /> */}
		<CounterApp value={10} />
	</React.StrictMode>,
)
