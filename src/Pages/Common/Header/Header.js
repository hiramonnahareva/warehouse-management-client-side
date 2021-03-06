import React, { useState } from 'react';
import CustomLink from '../../../Hooks/CustomLink';
import image from '../../../star-anise-isolated-on-white-vector-21551190.png';
import { FaBars } from 'react-icons/fa';
import {CgClose} from 'react-icons/cg';
import { auth } from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const [click, setClick] = useState(false);
    const handleMenu = () => setClick (!click);
    return (
            <nav className='p-5 bg-black text-white md:flex md:items-center md:justify-between'>
       
        <div className='flex items-center justify-between'>
            <span className='text-2xl font-[popins] cursor-pointer'>
            <img src={image} className='h-10 inline px-2' alt="" />
           <span> STAR ANISE</span>
            </span>
            <span className='text-2xl cursor-pointer md:hidden block mx-2'>
            <button onClick={handleMenu}> {click ? <CgClose/> : <FaBars/>}</button>
                </span>
            </div>
            <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0  ${click ? 'top-20 opacity-100 z-[1]': 'top-[-400px]'} transition-all ease-in`}>
           <li className='mx-4 my-6 md:my-0'> <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/home'>HOME</CustomLink> </li>
           <li className='mx-4 my-6 md:my-0'> <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/inventory'>INVENTORY</CustomLink> </li>
           <li className='mx-4 my-6 md:my-0'> <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/blogs'>BLOGS</CustomLink> </li>
           <li className='my-6 md:my-0'>
               {
                   user && <ul className={`md:flex md:items-center `}>
                    <li className='mx-4 my-6 md:my-0'> <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/abbNew'>ADD ITEM</CustomLink></li>
                    <li className='mx-4 my-6 md:my-0'> <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/item/:id'>MANAGE ITEM</CustomLink></li>
                   </ul>
               }
                 </li>
               <li>
               { user ?
                <button className='text-xl hover:text-amber-700 duration-500' onClick={()=>signOut(auth)}>SIGNOUT</button> :
                <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/login'>LOGIN</CustomLink>
           }
         
           </li>
            </ul>
            </nav>
    );
};

export default Header;