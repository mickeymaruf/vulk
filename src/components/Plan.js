import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'

const Plan = ({ plan }) => {
    const {name, price, icon} = plan;
    return (
        <div className="border border-indigo-500 rounded-lg p-5">
            <img className='w-16' src={icon} alt="" />
            <h3 className='text-xl font-medium mt-3'>{name}</h3>
            <p className='text-base font-thin'>Under $10,000 in monthly ad spend</p>
            <h1 className='text-3xl font-medium mt-5'>${price}<span className='text-sm text-slate-500'>/month</span></h1>
            <h3 className='mt-3 text-xl font-medium'>Features</h3>
            <ul className='grid gap-1 mt-3 text-slate-400 font-medium'>
                <li><CheckIcon className="h-6 w-6 text-blue-500 inline" /> Search term isolation</li>
                <li><CheckIcon className="h-6 w-6 text-blue-500 inline" /> Total sales analytics</li>
                <li><CheckIcon className="h-6 w-6 text-blue-500 inline" /> Best seller rank</li>
                <li><CheckIcon className="h-6 w-6 text-blue-500 inline" /> Placement optimization</li>
            </ul>
            <button className='bg-indigo-500 py-3 w-full mt-5 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-slate-700'>Start your Free Trail</button>
        </div>
    );
};

export default Plan;