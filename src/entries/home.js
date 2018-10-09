// import React from 'react';
// import { hydrate } from 'react-dom';
// import Home from '../pages/containers/home';
// // import Playlist from './src/playlist/components/playlist';
// import data from '../api.json';
// // console.log('Hola mundo!' )

// const homeContainer = document.getElementById('home-container')

// // ReactDOM.render(que voy a renderizar, donde lo haré);
// // const holaMundo = <h1>hola Estudiante!</h1>;
// hydrate( <Home data={data} />, homeContainer);



import React from 'react'; // Libreria para crear componentes
import { render } from 'react-dom'; // Libreria para renderizar componentes
import Home from '../pages/containers/home';
// import Playlist from '../playlist/components/playlist';
// import data from '../api.json';

// const app = document.getElementById('app');
const homeContainer = document.getElementById('home-container')

// PARAMETRO 1: que voy a renderizar
// PARAMETRO 2: donde voy a renderizar
// render(<Playlist data={data} />, app);
render( <Home />, homeContainer);