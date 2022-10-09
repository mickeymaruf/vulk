import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const phones = useLoaderData().data;
    return (
        <section className='bg-slate-900 text-white'>
            <div className="text-center pt-10">
                <p>Get started with one of our plans</p>
                <h1 className='text-5xl font-bold'>Simple, Comprehensive Pricing</h1>
                <p className='text-xl font-thin text-slate-400 my-2 w-5/12 mx-auto'>Improve the way your work, discover a brand new tool and drop the hassle once and for all.</p>
            </div>
            <div className='grid grid-cols-3 p-20 gap-10'>
                {
                    phones.map(phone => <Product key={phone.slug} phone={phone} />)
                }
            </div>
        </section>
    );
};

export default Products;