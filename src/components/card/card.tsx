import React from 'react';
import 'tailwindcss/tailwind.css';
import './card.css';

export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
    const [bgColor, setBgColor] = React.useState('bg-white');
    const [textColor, setTextColor] = React.useState('text-gray-800');

    const handleClick = () => {
        setBgColor(bgColor === 'bg-white' ? 'bg-slate-600' : 'bg-white');
        setTextColor(textColor === 'text-gray-800' ? 'text-white' : 'text-gray-800');
    };

    return (
        <div className={'w-full max-h-full h-52 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-between ' + bgColor}> 
            <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>

            <p className={'mt-2 text-gray-600' + ' ' + textColor}>
                {children}
            </p>

            <button className='mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 p-3' onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}