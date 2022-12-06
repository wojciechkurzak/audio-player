import React from 'react'
import audioData from '../data/audioData.json'
import AudioListElement from './AudioListElement'
import '../styles/AudioList.scss'

const AudioList = ({ listVisible, setListVisible }) => {
	return (
		<section
			className={
				listVisible
					? 'audio-list-container visible'
					: 'audio-list-container'
			}
		>
			<ul>
				{audioData.map(({ id, title, time, image }) => (
					<AudioListElement
						key={id}
						id={id}
						title={title}
						time={time}
						image={image}
						setListVisible={setListVisible}
					/>
				))}
			</ul>
		</section>
	)
}

export default AudioList
