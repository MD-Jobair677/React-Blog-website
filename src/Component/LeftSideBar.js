import React from 'react'
import './LeftSideBar.css'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { BiSolidConversation } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaWallet } from "react-icons/fa6";


const LeftSideBar = () => {
  return (
    <div className='left_sidebar_container'>
        <div className='item' > <FaHome   className='icon'  />   <a href="#">Home</a> </div>
        <div className='item' ><IoIosNotifications   className='icon'  /> <a href="#">Notificatoin</a> </div>
        <div className='item' ><GiShoppingBag /> <a href="#">Shop</a> </div>
        <div className='item' ><BiSolidConversation   className='icon'  /> <a href="#">Conversation</a> </div>
        <div className='item' ><FaWallet   className='icon'  /> <a href="#">Wallet</a> </div>
        <div className='item' ><MdSubscriptions /> <a href="#">Subscriptoin</a> </div>
        <div className='item' ><CgProfile  className='icon'  /> <a href="#">My Profile</a> </div>
        <div className='item' ><CiLogin   className='icon'  /> <a href="#">Log out</a> </div>


    </div>
  )
}

export default LeftSideBar