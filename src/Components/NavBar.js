import React, {useState} from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaShoppingCart } from "react-icons/fa";


const NavBar = ({cartItems})=>{
   const emptyCart = cartItems.length > 0
   const totalCartItems = cartItems.length
   const [showMenu, setShowMenu] =  useState(false)

   const toggleMenu = () =>{
      setShowMenu(!showMenu)
   }

   const handleLinkClick = () =>{
      setShowMenu(false)
   }

   return(
      <div className="Navigation">
         <div className="Navigation_Wrapper">
            <div className="Logo">
               <h3>Market<span>place.</span></h3>
            </div>

            <ul className={`Naviagtion_List ${showMenu ? "Show" :"" }`}>
               <li> <Link to="/" onClick={handleLinkClick}>home</Link></li>
               <li> <Link to="/Market" onClick={handleLinkClick}>Market</Link></li>
               <li> <Link to="/" onClick={handleLinkClick}>account</Link></li>
            </ul>
         
            <div className="Cart">
               <Link to="/Cart" > <FaShoppingCart className="Cart_icon"/> </Link>
               {emptyCart &&(
                     <h3>{totalCartItems}</h3>
               )}
                  
            </div>

            <div className="Menu_icon">
                  <HamburgerIcon
                  onClick={toggleMenu}
                  />
            </div>
         </div>
      </div>
   )

}

export default NavBar