import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-slate-900 text-white h-screen flex justify-center items-center'>
            <div>
                <h1 className='text-4xl mb-2'>404 Pgae Not Found !</h1>
                <p className='text-xl font-thin'>Did you forget your Home ?</p>
                <button onClick={() => window.history.back()}><ArrowLeftIcon className="h-8 w-8 text-blue-500 inline mt-3 cursor-pointer" /></button>
            </div>
        </div>
    );
};

export default NotFound;