import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TrialContext } from '../App';

const Plan = ({ plan }) => {
    const {trial, planId} = useContext(TrialContext);
    const { id, name, price, icon, desc, features } = plan;
    return (
        <div className="border border-indigo-500 rounded-lg p-5 relative">
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
            <Link to={`/pricing/${id}`} className={`${trial && planId === id ? 'bg-green-500' : 'bg-indigo-500 '} py-3 w-full mt-5 rounded-lg text-white font-medium hover:shadow-lg block text-center hover:shadow-slate-700`}>View Details</Link>
            {
                trial && planId === id &&
                <div className="absolute top-0 right-0 translate-x-3 -translate-y-2 bg-green-200 p-1 rounded-full">
                    <div className='bg-green-400 w-7 h-7 flex items-center justify-center rounded-full'>
                        <CheckIcon className="h-6 w-6 text-white inline" />
                    </div>
                </div>
            }
        </div>
    );
};

export default Plan;