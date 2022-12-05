import React from 'react'
import AudioButton from './AudioButton'
import { BsPlayFill } from 'react-icons/bs'
import { BsPauseFill } from 'react-icons/bs'
import '../styles/AudioControls.scss'

const AudioControls = ({ playing, setPlaying }) => {
	const toggleMusic = () => {
		setPlaying(!playing)
	}

	return (
		<section className="audio-controls-container">
			<AudioButton
				icon={playing ? <BsPauseFill /> : <BsPlayFill />}
				onClick={toggleMusic}
			/>
		</section>
	)
}

export default AudioControls
