import React from 'react'
import '../styles/Header.scss'
import wave from '../assets/wave.png'
import logo from '../assets/logo.png'

const Header = () => {
	return (
		<header className="header">
			<img src={wave} className="wave reversed" alt="wave" />
			<img src={logo} className="logo" alt="logo" />
			<img src={wave} className="wave" alt="wave" />
		</header>
	)
}

export default Header
