import React,{useState, useEffect} from "react";
import { IoAddOutline, IoRemoveOutline, IoTrashBin } from "react-icons/io5";
import { FaThumbsDown,  FaThumbsUp } from "react-icons/fa6";

const Cart = ({cartItems,removeFromCart, clearCart, removeClearCartMessage}) =>{

const hasItems = cartItems.length > 0
const totalCartItems = cartItems.length

const [cartQuantity, setCartQuantity] = useState({})
const [revealCartConfirmation, setRevealCartConfirmation] = useState(false);
const [itemToRemove, setItemToRemove] = useState(null);
const [revealClearCartConfirmation, setRevealClearCartConfirmation] = useState(false)
const [removeCartMessage, setRemoveCartMessage] = useState(false)

// Function to Display the cart Removal Confrimation
const revealCartRemoval = (itemId) =>{
   setItemToRemove(itemId)
   setRevealCartConfirmation(true)
}

// Function to Confirm or Reject Cart Removal
const cartRemovalHandler = (confirmRemoval) =>{
   if(confirmRemoval){
      removeFromCart(itemToRemove)
      setRemoveCartMessage(true)
      setTimeout(() => {
         setRemoveCartMessage(false)
      }, 3000);
   }
   setItemToRemove(null)
   setRevealCartConfirmation(false)
}

// Function to reveal clear cart Confirmation
const revealClearCartRemoval = () =>{
   setRevealClearCartConfirmation(true)
}


// Initializes quantities when components counts on each cart Product
useEffect(() =>{
   const initialQuantity = cartItems.reduce(
   (quantity, item) => ({
      ...quantity, 
      [item.id]:1  //Sets the initial quantity of each item to 1
   }), {})
   setCartQuantity(initialQuantity)
}, [cartItems])

  // Calculate total price of items in the cart
  const calculateTotalPrice = () => {
   return cartItems.reduce(
     (total, item) => total + item.price * cartQuantity[item.id],
     0
   ).toFixed(2);
 };

 // Handle quantity increase for a specific item
const increaseQuantity = (itemId) => {
   setCartQuantity((prevQuantities) => ({
     ...prevQuantities,
     [itemId]: prevQuantities[itemId] + 1,
   }));
 };

// Handle quantity decrease for a specific item
  const decreaseQuantity = (itemId) => {
   if (cartQuantity[itemId] > 1) {
      setCartQuantity((prevQuantities) => ({
       ...prevQuantities,
       [itemId]: prevQuantities[itemId] - 1,
     }));
   }
 };

const truncateTitle = (title, maxLength) => {
   if (title.length > maxLength) {
       return title.substring(0, maxLength) + '...';
   }
   return title;
};


   return(
      <div className="Cart_Wrapper">
               {removeCartMessage && (
                     <div className="RemoveCartMessage">
                        <p>Sucessfully Removed Item from Cart</p>
                     </div>
               )}

               { removeClearCartMessage && (
                  <div className="RemoveCartMessage">
                  <p>Sucessfully Cleared Cart Items</p>
                  </div>
               )}
               

            <div className="Cart_Header">
               <h3>Cart Items</h3>
               {hasItems &&(<h3> ({totalCartItems}) </h3>)}
            </div>

            <div className="Cart_Items" style={{padding:hasItems ? "10px 3px": ""}}>
            {hasItems ? (cartItems.map((cartProduct)=>(
                  <div className="Inner_Cart_Wrapper" key={cartProduct.id}>
                        <div  className="Specific_Cart_Item">
                              <div className="CartImageWrapper">
                                 <img className="CartImages" src={cartProduct.image} alt={cartProduct.title} />
                              </div>
                           <div className="CartProduct_MetaData">
                                 <div className="CartProduct_Button0">
                                    <p>{truncateTitle(cartProduct.title, 53)}</p>
                                    <p>${cartProduct.price}</p>
                                 </div>
                                 <div className="CartProduct_Button">
                                       <button onClick={() => revealCartRemoval(cartProduct.id)}  className="Crt_Btn0 ">
                                          < IoTrashBin />
                                          <p>Remove </p>
                                       </button>
                                       <div className="CartProduct_increment">
                                             <button className="Crt_Btn CB_1" onClick={() => increaseQuantity(cartProduct.id)} ><IoAddOutline  className="Cart_Button_Icon"/></button>
                                             <p className="Crt_Input">{cartQuantity[cartProduct.id]}</p>
                                             <button className="Crt_Btn CB_2" onClick={() => decreaseQuantity(cartProduct.id)}><IoRemoveOutline   className="Cart_Button_Icon"/> </button>
                                       </div>
                                 </div>
                           </div>             
                        </div>
                  </div>
               ))):(
                <div className="Empty_Cart">
                <p>Your cart is empty!</p>
               </div>
            )}
             
             {hasItems &&(
               <div className="Cart_Bottom">

               <div className="Crt_Btm1">
                     <h2>Cart total Summary</h2>
                     <div className="Crt_Smy">
                        <h4>subtotal:</h4>
                        <h4>${calculateTotalPrice()}</h4>
                     </div>
               </div>

               <div className="Crt_Btm2">
                  <button className="Crt_Btn2">
                        <p>Checkout</p>
                     </button>

                     <button className="Crt_Btn2" onClick={revealClearCartRemoval}>
                        <p>Clear Cart</p>
                     </button>
               </div>

                 {revealCartConfirmation && (
                      <div className="Remove_Cart_Item_Wrapper">
                           <div className="Cart_Item_Wrapper">
                                       <p>are you  sure you want to remove this cart item ?</p>
                                 <div className="Remove_Item_Button">
                                       <button className="Crt_Btn3" onClick={()=> cartRemovalHandler(true)}>
                                          <FaThumbsUp  className="Rmv_Icn" />
                                          <p>Yes</p>
                                       </button>
                                       <button className="Crt_Btn3" onClick={()=> cartRemovalHandler(false)}>
                                          <FaThumbsDown className="Rmv_Icn"/>
                                          <p>No</p>
                                       </button>
                                 </div>
                           </div>
                     </div>
                 )}

                    {revealClearCartConfirmation && (
                         <div className="Clear_Cart_Item_Wrapper">
                           <div className="Clear_Cart_Wrapper">
                                       <p>are you sure you want to clear your cart items ?</p>
                                       <p className="snd_par">All cart items will be removed!</p>
                                 <div className="Remove_Item_Button Clear_Special">
                                       <button className="Crt_Btn3" onClick={clearCart}>
                                          <FaThumbsUp  className="Rmv_Icn" />
                                          <p>Yes</p>
                                       </button>
                                       <button className="Crt_Btn3" onClick={()=> setRevealClearCartConfirmation(false)}>
                                          <FaThumbsDown className="Rmv_Icn"/>
                                          <p>No</p>
                                       </button>
                                 </div>
                           </div>
                         </div>
                    )}
               </div>
             )}
            
            </div>

         
      </div>
   )
}


export default Cart
