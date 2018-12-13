import React, {Component} from 'react'
import Categories from '../components/categories/categories'
import HomeLayout from '../components/pages/home-layout'
import Related from '../components/pages/related'
import ModalContainer from './modal'
import Modal from '../components/widgets/modal'
import HandleError from './handle-error'
import VideoPlayer from '../components/player/containers/video-player';
export default class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModalClick = () => {
    this.setState({
      modalVisible: true
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
          <VideoPlayer autoplay/>
          <Categories {...this.props} handleOpenModal={this.handleOpenModalClick}/>
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModalClick}>
                <h1>Esto es un portal</h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}