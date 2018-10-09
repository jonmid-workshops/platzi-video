import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
// import Categories from '../../categories/components/categories';
// import Related from '../components/related';
// import ModalContainer from '../../widgets/containers/modal';
// import Modal from '../../widgets/components/modal';
// import HandleError from '../../error/containers/handle-error';
// import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {
    // state = {
    //     modalVisible: false,
    // }
    
    // handleOpenModal = (media) => {
    //     this.setState({
    //         modalVisible: true,
    //         media
    //     })
    // }
    
    // handleCloseModal = (event) => {
    //     this.setState({
    //         modalVisible: false,
    //     })
    // }
    
    render() {
        return (
            <HomeLayout />
        )
    }
}

export default Home
