import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause.js'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
export default class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
  }
  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay) ? true : false
    })
  }
  handleLoadedMetadata = (event) => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Â¿QuÃ© es responsive Design?"/>
        <Controls>
          <PlayPause
            pause={this.state.pause} 
            handleClick={this.togglePlay}
          />
          <Timer 
            duration={this.state.duration}
          />
        </Controls>
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />

      </VideoPlayerLayout>
    )
  }
}