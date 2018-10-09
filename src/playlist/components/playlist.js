
// COMPONENTE FUNCIONAL: Este tipo de componente NO tiene ciclo de vida
import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';

function Playlist(props) {
    const playlist = props.data.categories[0].playlist;
    return (
        <div className="Playlist">
            <Play size={100} color="red"/>
            {
                playlist.map((item) => {
                    {/* return <Media openModal={props.handleOpenModal} {...item} key={item.id} /> */}
                    return <Media key={item.id} {...item} />
                })
            }
        </div>
    )
}
export default Playlist;

// COMPONENTE CON ESTADO COMPLETO: Este tipo de componente SI tiene ciclo de vida
// import React, { Component } from 'react';
// import Media from './media.js';
// import './playlist.css';

// class Playlist extends Component{
//     render(){
//         const playlist = this.props.data.categories[0].playlist;
//         return (
//             <div className="Playlist">
//                 {/* {
//                     props.playlist.map((item) => {
//                         return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
//                     })
//                 } */}
                

//                 {
//                     playlist.map((item) => {
//                         {/* <Media type="video" title="¿Qué es responsive desing?" author="@JonathanMideros" image="./images/covers/responsive.jpg" /> */}
//                         return <Media key={item.id} {...item} />
//                     })
//                 }
//             </div>
//         );
//     }
// }

// export default Playlist;