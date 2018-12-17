import React, {Component} from 'react'
import Categories from '../../categories/components/categories'
import HomeLayout from '../components/home-layout'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../errors/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player';
export default class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModalClick = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModalClick = () => {
    this.setState({
      modalVisible: false
    })
  }


  render(){

    return (
      <HandleError>
        <HomeLayout>
          <Related/>
          <Categories {...this.props} handleOpenModal={this.handleOpenModalClick}/>
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModalClick}>
                <VideoPlayer 
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}