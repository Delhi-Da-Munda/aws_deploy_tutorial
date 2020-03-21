import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './App.css'

function App() {
	const [quote, setQuote] = useState(null)
	const handleClick = () => {
		const api = 'http://localhost:5050/'
		fetch(api)
			.then(res => res.text())
			.then(data => setQuote(data))
	} 
	const quoteBody = (quote !== null ? <code style={{'marginTop': '20px', 'padding': '0 20px'}}>{quote}</code> : null)
  return (
		<div className='container'>
			<Typography variant='h1' style={{'fontWeight': 'bold', 'textAlign': 'center', 'margin': '10px' }}>YOUR WORLD</Typography>
			<ul>
				<li>🗻</li>
				<li>🌋</li>
				<li>🏰</li>
			</ul>
			<Button onClick = {handleClick} variant="outlined" style={{'marginTop': '10px'}}>Click me!</Button>
			{quoteBody}
	  </div> 
 );
}

export default App;
