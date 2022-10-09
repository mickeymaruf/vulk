import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Plan = ({ plan }) => {
    const { id, name, price, icon, desc, features } = plan;
    return (
        <div className="border border-indigo-500 rounded-lg p-5">
            <img className='w-16' src={icon} alt="" />
            <h3 className='text-xl font-medium mt-3'>{name}</h3>
            <p className='text-base font-thin'>{desc}</p>
            <h1 className='text-3xl font-medium mt-5'>${price}<span className='text-sm text-slate-500'>/month</span></h1>
            <h3 className='mt-3 text-xl font-medium'>Features</h3>
            <ul className='grid gap-1 mt-3 text-slate-400 font-medium'>
                {
                    features.map((feature, idx) => <li key={id + '' + idx}><CheckIcon className="h-6 w-6 text-blue-500 inline" /> {feature}</li>)
                }
            </ul>
            <Link to={`/pricing/${id}`} className='bg-indigo-500 py-3 w-full mt-5 rounded-lg text-white font-medium hover:shadow-lg block text-center hover:shadow-slate-700'>Start your Free Trail</Link>
        </div>
    );
};

export default Plan;