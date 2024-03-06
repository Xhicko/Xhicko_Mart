import React from 'react'
import './index.css'
import { BiSolidErrorAlt } from "react-icons/bi";

const Error = ({message}) =>{
   return(
            <div className="Error">
                  <BiSolidErrorAlt className="Error_Icon" />
                  <p>{message}</p>
               </div>
   )
}


export default Error