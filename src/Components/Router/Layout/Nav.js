import { faPhone, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Nav = () => {



  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err))
  }


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

            <li className="hover-bordered"><Link to={'/service'}>Service</Link></li>
            <li className="hover-bordered"><Link to={'/aboutus'}>About us</Link></li>

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

          <li className=' hover:text-green-500 mx-5 '><Link to={'/service'}>Service</Link></li>
          <li className=' hover:text-green-500 mx-5 '><Link to={'/aboutus'}>About us</Link></li>
         



        </ul>
      </div>
      <div className=" navbar-end ">



        {
          user?.uid ?
            <>

              <div className='flex justify-center items-center'>

                <div className="avatar mx-2">
                  <div className="w-10  rounded-full ring ring-success  ring-offset-base-100
                  ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <button onClick={handleLogOut} className='btn btn-outline btn-error text-green-900 font-bold mx-1'>
                  <h1 className=''>SignOut  <FontAwesomeIcon
                    icon={faRightFromBracket} size="xl" /></h1>
                </button>
                <Link to={'/admin-dashboard'}  className='btn btn-outline btn-error text-green-900 font-bold mx-1'>
                  <h1 className=''>Dashboard  <FontAwesomeIcon
                    icon={faRightFromBracket} size="xl" /></h1>
                </Link>







              </div>

            </>
            :
            <>
              <a href='http://www.facebook.com/originhospital/' className=" btn btn-circle   btn-link
    text-sm
    lg:text-xl"><img className='userProfile' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="" width="30" height="24"></img></a>


              <a href='tel:01832466730' className=" btn btn-ghost
    text-sm
    lg:text-xl">
                <FontAwesomeIcon icon={faPhone} size="xl" color='red' /></a>

            </>
        }
      </div>
    </div>
  );
};

export default Nav;