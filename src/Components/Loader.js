import React from 'react'
import './index.css'
import { ImSpinner9 } from "react-icons/im";

const Loader = () =>{
   return(
            <div className="Loader">
                  <ImSpinner9 className="Spinner"/>
                  <p>...Fetching Data.</p>
               </div>
   )
}


export default Loader