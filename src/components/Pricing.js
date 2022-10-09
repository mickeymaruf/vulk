import React from 'react';
import planning1 from '../images/planning-1.svg'
import planning2 from '../images/planning-2.svg'
import planning3 from '../images/planning-3.svg'
import Plan from './Plan';

export const plans = [
    {
        id: 1,
        name: 'Growth',
        price: 250,
        icon: planning1,
        desc: 'Under $10,000 in monthly ad spend',
        benifits: [
            'Access to slack community',
            'Access to support team',
            'Algorithmic bidding',
            'Keyword and ASIN harvesting',
        ],
        features: [
            'Search term isolation',
            'Total sales analytics',
            'Best seller rank',
            'Placement optimization',
        ],
    },
    {
        id: 2,
        name: 'Business',
        price: 500,
        icon: planning2,
        desc: 'Over $20,000 in monthly ad spend',
        benifits: [
            'All features in Growth',
            '3 week checkpoint call',
            '6 week checkpoint call',
            'Quarterly account assessment',
        ],
        features: [
            'Google Ads integration',
            'Automated rules and strategies',
            'Brand analytics',
            'Competitor intelligence',
        ],
    },
    {
        id: 3,
        name: 'Enterprise',
        price: 1250,
        icon: planning3,
        desc: 'Under $30,000 in monthly ad spend',
        benifits: [
            'All features in Business',
            'Strategic Partner Manager',
            'Quarterly Business Review',
            'Yearly Account Planning',
        ],
        features: [
            'Amazon DSP instance',
            'Amazon Marketing Cloud',
            'Datalake integration',
            'Custom dashboard',
        ],
    },
];



const Pricing = () => {
    return (
        <section className='bg-slate-900 text-white'>
            <div className="text-center pt-10">
                <p>Get started with one of our plans</p>
                <h1 className='text-4xl md:text-5xl font-bold'>Simple, Comprehensive Pricing</h1>
                <p className='text-xl font-thin text-slate-400 my-2 md:w-5/12 mx-auto'>Improve the way your work, discover a brand new tool and drop the hassle once and for all.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 p-20 gap-10">
                {
                    plans.map(plan => <Plan key={plan.id} plan={plan} />)
                }
            </div>
        </section>
    );
};

export default Pricing;