import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { plans } from './Pricing';
import { CheckIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const PlanDetails = () => {
    const _id = useLoaderData();
    const ourPlan = plans.find(plan => plan.id === +_id);
    const { id, name, price, icon, desc, benifits, features } = ourPlan;
    return (
        <section className='bg-slate-900 text-white min-h-screen p-20 grid grid-cols-3 items-start gap-10'>
            <div className="border border-indigo-500 rounded-lg p-5 py-8 col-span-2 flex items-center">
                <img className='w-16' src={icon} alt="" />
                <div className='ml-5'>
                    <h3 className='text-xl font-medium'>{name}</h3>
                    <p className='text-base font-thin'>{desc}</p>
                </div>
                <h1 className='text-3xl font-medium ml-auto'>${price}<span className='text-sm text-slate-500'>/month</span></h1>
            </div>
            <div className="border border-indigo-500 rounded-lg p-5">
                <h3 className='mt-3 text-xl font-medium'>Benifits</h3>
                <ul className='grid gap-1 mt-3 text-slate-400 font-medium'>
                    {
                        benifits.map((benifit, idx) => <li key={id+''+idx}><CheckIcon className="h-6 w-6 text-green-500 inline" /> {benifit}</li>)
                    }
                </ul>
                <h3 className='mt-3 text-xl font-medium'>Features</h3>
                <ul className='grid gap-1 mt-3 text-slate-400 font-medium'>
                    {
                        features.map((feature, idx) => <li key={id+''+idx}><CheckIcon className="h-6 w-6 text-blue-500 inline" /> {feature}</li>)
                    }
                </ul>
                <Link to={`/pricing/${id}`} className='bg-indigo-500 py-3 w-full mt-5 rounded-lg text-white font-medium hover:shadow-lg block text-center hover:shadow-slate-700'>Start your Free Trail</Link>
            </div>
            <button className='absolute top-[110px]' onClick={() => window.history.back()}><ArrowLeftIcon className="h-8 w-8 text-blue-500 inline mt-3 cursor-pointer" /></button>
        </section>
    );
};

export default PlanDetails;