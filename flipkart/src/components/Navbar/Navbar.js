import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {IoSearch} from 'react-icons/io5';
import { AiFillCaretDown } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import LoginModal from '../LoginModal/LoginModal';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user=useSelector((state)=>state.userData.user);
  console.log(user);
  return (
    <>
    <div className='navbar-container'>
      <div className='navbar'>
        <Link to={'/'}>
          <img 
          src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'
          alt='flipkart logo'
          className='navbar-logo'
          />
        
        </Link>
        <div className='navbar-search'>
          <input type="text" 
          placeholder='products category'
          className='navbar-searchbox'
          />
          <button className='searchbtn'>
            <IoSearch/>
          </button>
          </div>
          <button className='login' onClick={()=>setIsOpen(true)} >
            login
          </button>
          <div className='navbar-bcs'>
            Become a Seller

          </div>
          <div className='navbar-more'>
            <h3>
              more
              <i className='moredown'><AiFillCaretDown/></i>

            </h3>
          </div>

          
        
        <div className='navbar-cart'>
          <div className='navbar-icon'>
            <MdAddShoppingCart/>
          </div>
          <Link to={'/cart'} className='cart'>
            cart
          </Link>

        </div>
      </div>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}/>

    </div>
    </>
    );
};

export default Navbar;