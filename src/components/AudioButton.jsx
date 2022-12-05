import React from 'react'
import '../styles/AudioButton.scss'

const AudioButton = ({ icon, onClick }) => {
	return (
		<button className="control-button" onClick={onClick}>
			{icon}
		</button>
	)
}

export default AudioButton
