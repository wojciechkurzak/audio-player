import React from 'react'
import AudioButton from './AudioButton'
import { BsPlayFill } from 'react-icons/bs'
import { BsPauseFill } from 'react-icons/bs'
import { BsFillSkipForwardFill } from 'react-icons/bs'
import { BsFillSkipBackwardFill } from 'react-icons/bs'
import { GiSpeaker } from 'react-icons/gi'
import { useNavigate, useParams } from 'react-router-dom'
import audioData from '../data/audioData.json'
import '../styles/AudioControls.scss'
import { useState } from 'react'

const AudioControls = ({ playing, setPlaying }) => {
	const [volumeVisible, setVolumeVisible] = useState(false)

	const navigate = useNavigate()
	let { id } = useParams()

	const toggleMusic = () => {
		setPlaying(!playing)
	}

	const nextMusic = () => {
		if (id < audioData.length) navigate(`/${parseInt(id) + 1}`)
	}

	const previousMusic = () => {
		if (id > 1) navigate(`/${parseInt(id) - 1}`)
	}

	const volumeVisibleToggle = () => {
		setVolumeVisible(!volumeVisible)
	}

	return (
		<section className="audio-controls-container">
			<div className="buttons">
				<AudioButton
					icon={<BsFillSkipBackwardFill />}
					onClick={previousMusic}
				/>
				<AudioButton
					icon={playing ? <BsPauseFill /> : <BsPlayFill />}
					onClick={toggleMusic}
				/>
				<AudioButton
					icon={<BsFillSkipForwardFill />}
					onClick={nextMusic}
				/>
			</div>
			<div className="volume-container">
				<button className="volume-button" onClick={volumeVisibleToggle}>
					<GiSpeaker />
				</button>
				<div
					className={
						volumeVisible
							? 'volume-progress-bar-container'
							: 'volume-hidden'
					}
				>
					<input
						type="range"
						defaultValue="0"
						className="volume-progress-bar"
					/>
				</div>
			</div>
		</section>
	)
}

export default AudioControls
