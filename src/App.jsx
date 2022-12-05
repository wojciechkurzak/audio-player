import { useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import Header from './components/Header'
import song from './audio/Vosai - Demnuhbad.mp3'
import './styles/App.scss'
import AudioControls from './components/AudioControls'

const App = () => {
	const [audio, setAudio] = useState(song)
	const [playing, setPlaying] = useState(false)
	return (
		<div className="main-container">
			<Header />
			<div className="content-container">
				<AudioPlayer
					audio={audio}
					playing={playing}
					setPlaying={setPlaying}
				/>
			</div>
			<AudioControls playing={playing} setPlaying={setPlaying} />
		</div>
	)
}

export default App
