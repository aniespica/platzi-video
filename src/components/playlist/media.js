import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'
export default class Media extends PureComponent {

  state = {}

  componentDidMount() {
    this.setState({...this.props})
  }

  static propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio']).isRequired
  }

  render() {
    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" src={this.state.cover} alt="" width="260" height="160"/>
          <h3 className="Media-title">{this.state.title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}