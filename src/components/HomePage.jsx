import React from 'react'
import logo from '../assets/logo.png'
import '../styles/DefaultPage.scss'

const DefaultPage = () => {
	return (
		<div className="default-page-container">
			<img src={logo} className="logo" alt="logo" />
			<div className="text">Listen to the best music!</div>
		</div>
	)
}

export default DefaultPage
