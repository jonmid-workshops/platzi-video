import React from 'react'; // Libreria para crear componentes
import { render } from 'react-dom'; // Libreria para renderizar componentes
import data from './api.json';

// ########## COMPONENTES ##########
import Playlist from './playlist/components/playlist';

const app = document.getElementById('app');

// PARAMETRO 1: que voy a renderizar
// PARAMETRO 2: donde voy a renderizar
render(<Playlist data={data} />, app);