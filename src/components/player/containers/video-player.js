import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause.js'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import {formattedTime, isFullScreen, requestFullScreen, exitFullScreen} from '../../utils/utils'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'
export default class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    timer: '00:00 / 00:00',
    loading: false,
    muted:false
  }
  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay) ? true : false,
    })
  }

  componentDidUpdate(_, prevState) {
    if (this.state.currentTime !== prevState.currentTime || this.state.duration !== prevState.duration) {
      this.setState({
        timer: `${formattedTime(this.state.currentTime)} / ${formattedTime(this.state.duration)}`
      })
    }
    if (this.state.muted !== prevState.muted) {
      this.setState({
        muted: (this.state.muted) ? true : false,
      })
    }
  }
  
  handleLoadedMetadata = (event) => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }
  toggleMuted = event => {
    this.setState({
      muted: !this.state.muted
    })
  }
  handleFullScreenClick = event => {
    if (!isFullScreen()) {
      requestFullScreen(this.player)
    } else {
      exitFullScreen()
    }
  }
  setRef = element => {
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title={this.props.title}/>
        <Controls>
          <PlayPause
            pause={this.state.pause} 
            handleClick={this.togglePlay}
          />
          <Timer 
            timer={this.state.timer}
          />
          <ProgressBar 
            value={this.state.currentTime}
            duration={this.state.duration}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            toggleMuted={this.toggleMuted}
            muted={this.state.muted}
          />
          <FullScreen handleFullScreenClick={this.handleFullScreenClick}/>
        </Controls>
        <Spinner active={this.state.loading}/>
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          autoplay={this.props.autoplay}
          muted={this.state.muted}
          pause={this.state.pause}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeked={this.handleSeeked}
          handleSeeking={this.handleSeeking}
          src={this.props.src}
        />

      </VideoPlayerLayout>
    )
  }
}