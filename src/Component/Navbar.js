import React from 'react'
import { FcSearch } from "react-icons/fc";
import { LuListFilter } from "react-icons/lu";
const Navbar = () => {
  return (
    <div>


<div className='nav-bar'>


      <div className='logo'>WMD</div>

      <div className='search'>

        <div className='left'>
         <FcSearch/>   search Heare.....

        </div>
        <div className='right'>
        <LuListFilter />     Filter
        </div>

      </div>

      <div className='seller'>Became a seller</div>


      </div>


    </div>
  )
}

export default Navbar