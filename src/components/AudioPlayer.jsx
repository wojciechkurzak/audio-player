import React, { useState, useRef, useEffect } from 'react'
import '../styles/AudioPlayer.scss'

const AudioPlayer = ({ audio, playing, setPlaying }) => {
	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState('0:00')

	const audioPlayerRef = useRef()
	const progressBarRef = useRef()
	const animationRef = useRef()

	const updateRange = () => {
		progressBarRef.current.style.setProperty(
			'--seek-before-width',
			`${(progressBarRef.current.value / duration) * 100}`
		)
		setCurrentTime(formatTime(progressBarRef.current.value))
		if (audioPlayerRef.current.currentTime >= duration) {
			audioPlayerRef.current.currentTime = 0
			setPlaying(false)
		}
	}

	const changeRange = () => {
		audioPlayerRef.current.currentTime = progressBarRef.current.value
		updateRange()
	}

	const whilePlaying = () => {
		progressBarRef.current.value = audioPlayerRef.current.currentTime
		updateRange()
		animationRef.current = requestAnimationFrame(whilePlaying)
	}

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
		return `${minutes}:${returnedSeconds}`
	}

	useEffect(() => {
		const time = Math.floor(audioPlayerRef.current.duration)
		progressBarRef.current.max = time
		setDuration(time)
	}, [
		audioPlayerRef?.current?.loadedmetadata,
		audioPlayerRef?.current?.readyState,
	])

	useEffect(() => {
		if (playing) {
			audioPlayerRef.current.play()
			animationRef.current = requestAnimationFrame(whilePlaying)
		} else {
			audioPlayerRef.current.pause()
			cancelAnimationFrame(whilePlaying)
		}
	}, [playing])

	return (
		<section className="audio-player-container">
			<audio ref={audioPlayerRef} src={audio}></audio>
			<div className="image"></div>
			<div className="info">
				<div className="title">Song name</div>
				<input
					ref={progressBarRef}
					onChange={changeRange}
					type="range"
					defaultValue="0"
					onEnded={() => setPlaying(false)}
					className="progressBar"
				/>
				<div className="time">{currentTime}</div>
			</div>
		</section>
	)
}

export default AudioPlayer
