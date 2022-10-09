import React from 'react';
import heroImg from '../images/hero.png'

const Hero = () => {
    return (
        <section className='bg-slate-900 text-white'>
            <div className="w-6/12 mx-auto text-center pt-10">
                <h1 className='text-5xl font-bold'>The Mobile Application<br />Platform For <span className='text-violet-600'>Runners</span></h1>
                <p className='text-xl font-thin text-slate-400 my-2'>Work hard. Bring together your discussions , memberships, and content. Integrate a thriving community all under your own motivation.</p>
                <div className='my-5'>
                    <button className='bg-indigo-500 py-3 px-6 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-slate-700 mr-3'>Download</button>
                    <button className='bg-indigo-500 py-3 px-6 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-slate-700'>Learn More</button>
                </div>
                <img className='' src={heroImg} alt="" />
            </div>
        </section>
    );
};

export default Hero;