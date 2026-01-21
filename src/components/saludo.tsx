import React from 'react';
import './saludo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Card from './card/card';

export default function Saludo() {
    const handleClick = () => {
        alert('¡Hola! Has hecho clic en el botón.');
    };
    return (
        <main className='min-h-screen w-full flex items-center justify-center bg-slate-900 flex-col gap-6'>
            <h1 className='text-4xl font-bold text-white'>¡Bienvenido a mi aplicación React con Vite!</h1>
            <button className="btn" onClick={handleClick}>
                Haz clic aquí <FontAwesomeIcon icon={faCoffee} />
            </button>

            <article className='mt-3 w-3/4 bg-gray-300 p-4 rounded-lg flex justify-center items-center flex- gap-4' >
                <section className='flex h-fit flex-col gap-4'>
                    <Card title="Tarjeta de Ejemplo">
                        Esta es una tarjeta de ejemplo creada como un componente reutilizable en React.
                    </Card>
                    <Card title="Segunda Tarjeta">
                        ¡Las tarjetas son geniales para mostrar información de manera organizada!
                    </Card>
                </section>
                <section className='flex h-fit flex-col gap-4'>
                    <Card title="Otra Tarjeta">
                        Aquí hay otra tarjeta para demostrar la reutilización de componentes.
                    </Card>
                    <Card title="Tarjeta Adicional">
                        ¡Puedes agregar tantas tarjetas como desees!
                    </Card>
                </section>
            </article>
        </main>
    );
}