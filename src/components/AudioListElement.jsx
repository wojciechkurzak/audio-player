import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/AudioListElement.scss'

const AudioListElement = ({ id, title, time, image, setListVisible }) => {
	const [audioImage, setAudioImage] = useState(null)

	useEffect(() => {
		const file = require(`../assets/${image}`)
		setAudioImage(file)
	}, [image])

	return (
		<li>
			<Link to={`/${id}`}>
				<div
					className="list-element-container"
					onClick={() => setListVisible(false)}
				>
					<img className="image" src={audioImage} alt="audio" />
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
