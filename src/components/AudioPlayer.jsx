import React, { useState, useRef, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import audioData from '../data/audioData.json'
import '../styles/AudioPlayer.scss'

const AudioPlayer = () => {
	const [audio, setAudio] = useState('')
	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState('0:00')

	let { id } = useParams()
	const { volume, playing, setPlaying } = useOutletContext()

	const title = audioData[id - 1].title
	const path = audioData[id - 1].file

	const audioPlayerRef = useRef()
	const progressBarRef = useRef()
	const animationRef = useRef()

	const updateRange = () => {
		progressBarRef.current.style.setProperty(
			'--seek-before-width',
			`${(progressBarRef.current.value / duration) * 100}`
		)
		setCurrentTime(formatTime(progressBarRef.current.value))
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
		const file = require(`../audio/${path}`)
		setAudio(file)
		setPlaying(false)
	}, [path])

	useEffect(() => {
		const time = Math.floor(audioPlayerRef.current.duration)
		progressBarRef.current.max = time
		audioPlayerRef.current.onended = () => {
			setPlaying(false)
		}
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

	useEffect(() => {
		audioPlayerRef.current.volume = volume / 100
	}, [volume])

	return (
		<section className="audio-player-container">
			<audio ref={audioPlayerRef} src={audio}></audio>
			<div className="image"></div>
			<div className="info">
				<div className="title">{title}</div>
				<div className="audio-time">
					<input
						ref={progressBarRef}
						onChange={changeRange}
						type="range"
						defaultValue="0"
						className="progressBar"
					/>
					<div className="time">{currentTime}</div>
				</div>
			</div>
		</section>
	)
}

export default AudioPlayer
