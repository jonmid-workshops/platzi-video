import React from 'react'; // Libreria para crear componentes
import { render } from 'react-dom'; // Libreria para renderizar componentes
import Home from '../pages/containers/home';
import data from '../api.json';

const homeContainer = document.getElementById('home-container')

// PARAMETRO 1: que voy a renderizar
// PARAMETRO 2: donde voy a renderizar
render(<Home data={data}/>, homeContainer);