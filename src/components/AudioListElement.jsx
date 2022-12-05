import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AudioListElement.scss'

const AudioListElement = ({ id, title, time, image, path }) => {
	return (
		<li>
			<Link to={`/${id}`}>
				<div className="list-element-container">
					<div className="image"></div>
					<div className="text">
						<div className="title">{title}</div>
						<div className="time">{time}</div>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default AudioListElement
