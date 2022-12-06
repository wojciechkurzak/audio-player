import { useState } from 'react'
import Header from './components/Header'
import AudioControls from './components/AudioControls'
import AudioList from './components/AudioList'
import { Outlet } from 'react-router-dom'
import './styles/App.scss'

const App = () => {
	const [playing, setPlaying] = useState(false)
	const [volume, setVolume] = useState(50)
	return (
		<div className="main-container">
			<Header />
			<div className="content-container">
				<AudioList />
				<Outlet context={{ volume, playing, setPlaying }} />
			</div>
			<AudioControls
				playing={playing}
				setPlaying={setPlaying}
				volume={volume}
				setVolume={setVolume}
			/>
		</div>
	)
}

export default App
