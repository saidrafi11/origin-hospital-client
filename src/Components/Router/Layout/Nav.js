import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className=" navbar bg-white sticky sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu  dropdown-content menu bg-base-100 w-56">
     
      <li className="hover-bordered"><Link to={'/'}>Home</Link></li>
      <li className="hover-bordered"><Link to={'/appointment'}>Appointment</Link></li>
      
      <li className="hover-bordered"><a>Service</a></li>
      <li className="hover-bordered"><a>About Us</a></li>
    
      </ul>
    </div>
    
    <div className='flex justify-center items-center'>
    <Link to={'/'} ><img className='w-12' src={require('./../../../assets/images/100x100.jpg')} alt="" /></Link>
    <Link to={'/'} className=" normal-case text-xl lg:text-2xl font-bold text-lime-800 w-52 lg:text-2xl">Origin Hospital</Link></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1 font-semibold text-lg">
      <li className='mx-5  hover:text-green-500 '><Link to={'/'}>Home</Link></li>
      <li className=' hover:text-green-500 mx-5 '><Link to={'/appointment'}>Appointment</Link></li>
      
      <li className=' hover:text-green-500 mx-5 '><a>Service</a></li>
      <li className=' hover:text-green-500 mx-5 '><a>About Us</a></li>
    </ul>
  </div>
  <div className=" navbar-end ">
    <a href='tel:01832466730' className=" btn btn-outline lg:btn-wide btn-error font-bold">Call us</a>
  </div>
</div>
    );
};

export default Nav;