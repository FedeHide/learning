import PropTypes from 'prop-types'

export function App( {title, subTitle}) {

	

	return (
		<>
			<h1>{ title }</h1>
			{/* <code>{ JSON.stringify( newMessage ) }</code> */}
			<p>{ subTitle }</p>
		</>
	)
}


App.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.number.isRequired
}

App.defaultProps = {
	title: 'No hay titulo',
	subTitle: 'No hay subtitulo'
}