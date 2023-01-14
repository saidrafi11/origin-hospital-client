import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../../Layout/Nav';

const AdminDashboard = () => {
    return (
        <>
        <Nav></Nav>
        <div style={{
            backgroundColor: "#60ffaa",
            backgroundImage: 'linear-gradient(223deg, #60ffaa 40%, #FFFB7D 100%)'


        }} className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-start  justify-start p-5">
  
    {/* <!-- Page content here --> */}
    <div>
        
    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"><svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg></label>
    </div>
    <div className='w-full  min-h-screen'><Outlet></Outlet></div>
  
  </div> 
  
  
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link className='font-bold' to={'/admin-dashboard'}>Indoor Services</Link></li>
      <li><Link className='font-bold' to={'/admin-dashboard/outdoor-services'}>Outdoor Services</Link></li>
      <li><Link className='font-bold' to={'/admin-dashboard/other-services'}>Other Services</Link></li>
      <li><Link className='font-bold' to={'/admin-dashboard/add-depertment'}>Add depertment</Link></li>
    </ul>
  
  </div>
</div>
</>
    );
};

export default AdminDashboard;