import React from 'react';

const Product = ({ phone }) => {
    const { brand, phone_name, image } = phone;
    return (
        <div className="border border-slate-500 bg-white">
            <img className='mx-auto p-5' src={image} alt="" />
            <div className='bg-slate-900 p-5'>
                <h3 className='text-xl font-medium mt-3'>{phone_name}</h3>
                <h3 className='text-xl font-medium mt-3'>{brand}</h3>
                <button className='bg-indigo-500 py-3 w-full mt-5 text-white font-medium hover:shadow-lg hover:shadow-slate-700'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;