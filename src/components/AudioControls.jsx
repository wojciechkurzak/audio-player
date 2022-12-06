import React from 'react'
import AudioButton from './AudioButton'
import { BsPlayFill } from 'react-icons/bs'
import { BsPauseFill } from 'react-icons/bs'
import { BsFillSkipForwardFill } from 'react-icons/bs'
import { BsFillSkipBackwardFill } from 'react-icons/bs'
import { BsMusicNoteList } from 'react-icons/bs'
import { GiSpeaker } from 'react-icons/gi'
import { useNavigate, useParams } from 'react-router-dom'
import audioData from '../data/audioData.json'
import '../styles/AudioControls.scss'
import { useState } from 'react'

const AudioControls = ({
	volume,
	setVolume,
	playing,
	setPlaying,
	listVisible,
	setListVisible,
}) => {
	const [volumeVisible, setVolumeVisible] = useState(false)

	const navigate = useNavigate()
	let { id } = useParams()

	const toggleMusic = () => {
		setPlaying(!playing)
	}

	const nextMusic = () => {
		if (id < audioData.length) navigate(`/audio/${parseInt(id) + 1}`)
	}

	const previousMusic = () => {
		if (id > 1) navigate(`/audio/${parseInt(id) - 1}`)
	}

	const volumeVisibleToggle = () => {
		setVolumeVisible(!volumeVisible)
	}

	const listVisibleToggle = () => {
		setListVisible(!listVisible)
	}

	return (
		<section className="audio-controls-container">
			<div className="toggle-list-container">
				<button
					className="toggle-list-button"
					onClick={listVisibleToggle}
				>
					<BsMusicNoteList />
				</button>
			</div>
			<div className="control-buttons">
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
						value={volume}
						onChange={(e) => setVolume(e.target.value)}
						type="range"
						className="volume-progress-bar"
						min="0"
						max="100"
					/>
				</div>
			</div>
		</section>
	)
}

export default AudioControls
