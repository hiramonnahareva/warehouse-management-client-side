import React from 'react';

const Item = ({item}) => {
    const {img, name, descrption, } = item;
    return (
        <div className='shadow-lg p-3' >
            <img className='w-full' src={img} alt="" />
           <div className='lg:p-6'>
           <h2 className='lg:text-2xl lg:font-semibold text-amber-700 py-2'>{name}</h2>
            <p className='lg:text-xl text-gray-900 font-light lg:leading-20 pb-2 text-justify'>{descrption}</p>
           </div>
           <div className='flex justify-center'>
           <button className='border-2 rounded-full px-3 lg:px-7 py-2 border-amber-700 lg:text-xl text-amber-700 hover:bg-amber-500 hover:text-white transition-all ease-in hover:border-amber-500 mb-4'>Update</button>
           <button className='border-2 rounded-full px-3 lg:px-7 py-2 border-amber-700 lg:text-xl text-amber-700 hover:bg-amber-500 hover:text-white transition-all ease-in hover:border-amber-500 mb-4'>Delete</button>
           </div>
        </div>
    );
};

export default Item;
