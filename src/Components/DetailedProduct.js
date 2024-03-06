import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";
import { FaCheck } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";

const DetailedProduct = ({addToCart, cart}) =>{
   const [productDetails, setProductDetails] = useState([])
   const [loading, isLoading] = useState(true)
   const [error, setError] = useState(null)
   const { id } = useParams();
   const [cartSuccess, setCartSuccess] = useState(false)
   const [inCart, setInCart] = useState(false)
   const [cartError, setCartError] = useState(false)

   useEffect(()=>{
      const fetchDetailedProduct = async ()=>{
         try{
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProductDetails(response.data)
            isLoading(false)
         }
         catch(error){
            if(error.response) {
               setError('...Failed to fetch products. Server error.')
            } 
            else if(error.request) {
               setError('...Failed to fetch products. No response received.');
            } 
            else {
               setError('...Failed to fetch products. Unknown error occurred.');
            }
            isLoading(false)
         }
      }
      fetchDetailedProduct()
   },[id])

const linkProductDetailsToCart = () =>{
     try{
         const isProductInCart = cart.some(item => item.id === productDetails.id);
         if (isProductInCart) {
            setInCart(true);
               setTimeout(() => {
                  setInCart(false)
               }, 3000)
         } 
         else {
            addToCart(productDetails);
            setCartSuccess(true);
               setTimeout(() => {
                  setCartSuccess(false)
               }, 3000)
         }
     }
     catch(error){
      setCartError(true)
         setTimeout(()=>{
            setCartError(false)
         },3000)
     }
}

   return(
      <div className="Detailed_Product_Wrap">       
      
      {cartSuccess &&(
            <div className="Cart_Wrap Cart_Success">
               <FaCheck className="Cart_Cancel_Icon"/>
               <p>Product succesfully added to cart!</p>
            </div>
         )}
      
         {cartError &&(
            <div className="Cart_Wrap Cart_Error">
               <TiCancel className="Cart_Cancel_Icon"/>
               <p>Product Not added to cart!</p>
            </div>
         )}
      
         
          {inCart &&(
            <div className="Cart_Wrap Cart_Error">
               <p>Product already exist in your cart!</p>
            </div>
         )}
                     {error && <Error message={error} />}

           {loading ? (
               <Loader />
           )
           : (
              <div className="Detailed_Product">
                  <div className="Section_1">
                     <img className="Detail_Image"  src={productDetails.image} alt={productDetails.title} />
                  </div>  

                  <div className="Section_2">
                     <div className="Inner_Sect">
                        <h3>Name</h3>
                        <h3>: {productDetails.title}</h3>
                     </div>

                     <div className="Inner_Sect">         
                        <h3>Info</h3>
                        <h3>: {productDetails.description}</h3>
                     </div>

                     <div className="Inner_Sect">
                        <h3>Price</h3>
                        <h3>:<b>$</b>{productDetails.price}</h3>
                     </div>



                  <div className="Other_Meta">
                     <button onClick={linkProductDetailsToCart} >Add to cart </button>

                     <button type="click" >
                           <Link to="/Market">Back</Link>
                     </button>
                  </div>
                        
                  </div>                
              </div>
           )}
      </div>
   )
}

export default DetailedProduct