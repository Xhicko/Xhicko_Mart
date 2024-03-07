import React, {useState, useEffect} from "react";
import { ChakraProvider } from '@chakra-ui/react'
import './Components/index.css'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ProducstList from "./Components/ProducstList";
import DetailedProduct from "./Components/DetailedProduct";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Men from "./Components/Men"
import Women from "./Components/Women";
import Electronic from "./Components/Electronic";
import Jewelries from "./Components/Jewelries";


const App = ()=>{


const [cartItems, setCartItems] = useState([])
const [removeClearCartMessage, setRemoveClearCartMessage] = useState(false)


useEffect(()=>{
   const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
}, [])

const addToCart = (productDetails) => {
   const isProductInCart = cartItems.some(item => item.id === productDetails.id);
 
   if (!isProductInCart) {
     const updatedCartItems = [...cartItems, { ...productDetails }];
     setCartItems(updatedCartItems);
     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
   }
 };
 
const removeFromCart = (itemId) =>{
   const updatedCartItems = cartItems.filter((item) =>item.id !== itemId)
   setCartItems(updatedCartItems)
   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
}

const clearCart = () => {
   setCartItems([]);
   localStorage.removeItem("cartItems");
   setRemoveClearCartMessage(true)
      setTimeout(() => {
         setRemoveClearCartMessage(false)
      }, 3000);
 }

  return(
    <div className="App">
      <ChakraProvider>
         <BrowserRouter>
         <NavBar  cartItems={cartItems}/>
         <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/Market" element={ <ProducstList />} />
            <Route path="/Men"element={ <Men /> } />
            <Route path="/Women" element={ <Women /> } />
            <Route path="/Jewelries" element={ <Jewelries /> } />
            <Route path="/Electronic" element={ <Electronic /> } />
            <Route path="/products/:id" element={ <DetailedProduct addToCart={addToCart} cart={cartItems}/>} />
            <Route path="/Cart" element={ <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} removeClearCartMessage={removeClearCartMessage} /> } />
         </Routes>
         <Footer />
         </BrowserRouter>
      </ChakraProvider>       
    </div>
  )
}

export default App;
