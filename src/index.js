import React from 'react'; // Libreria para crear componentes
import { render } from 'react-dom'; // Libreria para renderizar componentes

// ########## COMPONENTES ##########
import Media from './playlist/components/media';

const app = document.getElementById('app');

// PARAMETRO 1: que voy a renderizar
// PARAMETRO 2: donde voy a renderizar
render(<Media type="video" title="¿Qué es responsive desing?" author="@JonathanMideros" image="./images/covers/responsive.jpg" />, app);