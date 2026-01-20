import React from 'react';
import './saludo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Saludo() {
    return (
        <button id='magic' className='btn'>
            magic <FontAwesomeIcon icon={faCoffee} />
        </button>
    );
}

export default Saludo;