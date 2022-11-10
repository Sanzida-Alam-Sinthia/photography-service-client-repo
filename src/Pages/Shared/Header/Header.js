import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/favicon.JPG'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleUserLogOut = () => {
        logOut()
            .then()
            .catch();
    }
    const headerMenu = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
        <li className='font-semibold'><Link to='/services'>All Services</Link></li>

    </>
    return (
        <div>
            <div className="navbar p-4 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {headerMenu}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        <img className='object-cover relative rounded-full border
                     border-gray-100 shadow-sm
                         max-w-max   h-full' src={logo} alt='' />

                    </Link>
                    <Link className='font-bold text-xl p-1'>
                        <h2>Memory Creation Photography</h2>

                        <small>By Sanzida</small>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {headerMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <>
                                <a className='font-semibold text-lg mr-4' href='/myreviews'>
                                    My Reviews
                                </a>
                                <a className='font-semibold text-lg mr-4' href='/addservices'>
                                    Add Service
                                </a>
                                <a className='font-semibold'>
                                    <button onClick={handleUserLogOut} className='btn-warning text-base rounded mr-2 p-1'>Sign Out</button>
                                </a>
                            </>
                            :
                            <li className='btn btn-warning rounded p-2 font-semibold text-base mr-3'><Link to='/login'>Login</Link></li>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;