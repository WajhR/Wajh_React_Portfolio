import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'  
// import {HiOutlineMail} from 'react-icons';
// import {BsFillPersonLinesFill} from '.react-icons'

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
 
function NavTabs({ currentPage, handlePageChange }) {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);

  return (
    <nav className="stickt w-full h-[80px] flex justify-between items-center px-4 bg-opacity-0 text-gray-300 ">
      <div className="mx-4">
        <h4 className="text-2xl uppercase font-bold">
          <span className="text-pink-600">W</span>ajeeha<span className="text-pink-600"> R</span>iyasat
        </h4>
      </div>

      <ul className="hidden md:flex justify-center gap-1 py-2 text-lg nav nav-tabs">
        
        <li className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-full">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-full'>
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
          

            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-full'>
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
           

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-full'>
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    {/* hamburger bars for mobile  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!menu ? <FaBars /> : <FaTimes />}
      </div>

       {/* mobile menu */}
       <ul
        className={
          !menu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
        onClick={() => setMenu(false)}
      >
        <li className="py-6 text-4xl hover:text-gray-50">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}>
            Home
          </a>
        </li>
          
        <li className="py-6 text-4xl hover:text-gray-50">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}>
            About Me
          </a>
        </li>

        <li className="py-6 text-4xl hover:text-gray-50">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}>
            Portfolio
          </a>
        </li>

        <li className="py-6 text-4xl hover:text-gray-50">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}>
            Contact
          </a>
        </li>
      </ul>

        {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-5px] duration-300 bg-[#0f0f0f]">
            <a className="flex justify-evenly items-center w-full text-gray-300"
            href="/">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-600">
            <a className="flex justify-evenly items-center w-full text-gray-300"
            href="/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li> 
          <h1></h1>
        </ul>
      </div>

    </nav>
  );
}

export default NavTabs;
