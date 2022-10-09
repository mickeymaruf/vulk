import React from 'react';
import planning1 from '../images/planning-1.svg'
import planning2 from '../images/planning-2.svg'
import planning3 from '../images/planning-3.svg'
import Plan from './Plan';

const Pricing = () => {
    const plans = [
        {id: 1, name: 'Growth', price: 250, icon: planning1},
        {id: 2, name: 'Business', price: 500, icon: planning2},
        {id: 3, name: 'Enterprise', price: 1250, icon: planning3},
    ]
    return (
        <section className='bg-slate-900 text-white'>
            <div className="text-center pt-10">
                <p>Get started with one of our plans</p>
                <h1 className='text-5xl font-bold'>Simple, Comprehensive Pricing</h1>
                <p className='text-xl font-thin text-slate-400 my-2 w-5/12 mx-auto'>Improve the way your work, discover a brand new tool and drop the hassle once and for all.</p>
            </div>
            <div className="grid grid-cols-3 p-20 gap-10">
                {
                    plans.map(plan => <Plan key={plan.id} plan={plan} />)
                }
            </div>
        </section>
    );
};

export default Pricing;