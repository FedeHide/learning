import PropTypes from 'prop-types'

export function App( {title, subTitle, name}) {

	return (
		<>
			<h1 data-testid='test-title' >{ title }</h1>
			{/* <code>{ JSON.stringify( newMessage ) }</code> */}
			<p>{ subTitle }</p>
			<p>{ name }</p>
		</>
	)
}


App.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	name: PropTypes.string
}

App.defaultProps = {
	// title: 'No hay titulo',
	subTitle: 'No hay subtitulo',
	name: 'Rukito'
}