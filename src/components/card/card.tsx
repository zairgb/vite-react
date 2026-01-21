import React from 'react';

export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className='w-full max-h-full h-52 rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-between
        '>
            <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>

            <p className='mt-2 text-gray-600'>
                {children}
            </p>

            <button className='mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 p-3'>
                Click me
            </button>
        </div>
    );
}