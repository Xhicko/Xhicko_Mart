import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserTie } from "react-icons/fa";
import { GiSkirt } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";

import { Link } from "react-router-dom";

const Home = ()=>{
   return(
      <div className="Home_Wrapper">
        <div className="Home">
            <div className="Home_Top_Wrapper">
            <div className="Category_Wrapper">
                  <div className="CatDesign">
                     <Link to="#"> 
                        <FaUserTie className="CatIcon" />
                        <p>Men</p>
                     </Link>
                  </div>

                  <div className="CatDesign">
                     <Link to="#">
                        <GiSkirt className="CatIcon" />
                        <p>Women</p>
                     </Link>
                  </div>

                  <div className="CatDesign">
                     <Link to="#">
                        <RiComputerFill className="CatIcon" />
                        <p>Electronic</p>
                     </Link>
                  </div>

                  <div className="CatDesign">
                     <Link to="#"> 
                        <IoDiamond  className="CatIcon" />
                        <p>Jewelries</p>
                     </Link>
                  </div>
            </div>

              <div className="Carousel_wrapper">
                  <Carousel data-bs-theme="light">
                              <Carousel.Item>
                                 <div className="Carousel_Image_Wrap">
                                    <div className="Image_Wrap_Img">
                                       <img 
                                             src="https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                             alt="First_Carousel"
                                       />
                                    </div>
                                  
                                 </div>
                                 <Carousel.Caption>
                                    <h5 className="Caption_Title">Mens Clothing</h5>
                                    <p className="Caption_Detail">Effortless style for the modern man.</p>
                                 </Carousel.Caption>
                              </Carousel.Item>
                              
                              <Carousel.Item>
                                 <div className="Carousel_Image_Wrap">
                                    <div className="Image_Wrap_Img">
                                    <img 
                                          src="https://images.pexels.com/photos/5490783/pexels-photo-5490783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                          alt="First_Carousel"
                                    />
                                    </div>
                                 </div>
                                 <Carousel.Caption>
                                    <h5 className="Caption_Title">Womens Clothing</h5>
                                    <p className="Caption_Detail">Elevate your style with chic fashion.</p>
                                 </Carousel.Caption>
                                    
                              </Carousel.Item>

                              <Carousel.Item>
                                 <div className="Carousel_Image_Wrap">
                                    <div className="Image_Wrap_Img">
                                    <img 
                                          src="https://images.pexels.com/photos/1028441/pexels-photo-1028441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                          alt="Third_Carousel"
                                    />
                                    </div>
                                 </div>
                                 <Carousel.Caption>
                                    <h5 className="Caption_Title">electronics</h5>
                                    <p className="Caption_Detail">Shop electronics at our marketplace.</p>
                                 </Carousel.Caption>
                                    
                              </Carousel.Item>

                              <Carousel.Item>
                                 <div className="Carousel_Image_Wrap">
                                    <div className="Image_Wrap_Img">
                                    <img 
                                          src="https://images.pexels.com/photos/905690/pexels-photo-905690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                          alt="Forth_Carousel"
                                    />
                                    </div>
                                 </div>
                                 <Carousel.Caption>
                                    <h5 className="Caption_Title">Jewelry</h5>
                                    <p className="Caption_Detail">Explore stunning jewelry at our boutique.</p>
                                 </Carousel.Caption>
                                    
                              </Carousel.Item>

                  </Carousel>
              </div>

               <div className="Coming_Soon_Wrapper">
                  <h3>coming soon</h3>
                  <div className="Coming_Soon_Content">
                        <div className="CSC_Box">
                           <div classname="Image_Container">
                                 <div className="Image_wrapper">
                                       <img 
                                                src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                alt="Forth_Carousel"
                                       />
                                 </div>
                           </div>
                           <button className="CSC_Button">Flash Sales</button>
                        </div>

                        <div className="CSC_Box">
                           <div classname="Image_Container">
                                 <div className="Image_wrapper">
                                 <img 
                                                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                alt="Forth_Carousel"
                                       />
                                 </div>
                           </div>
                           <button className="CSC_Button">Bulk Sales</button>
                        </div>

                        <div className="CSC_Box">
                           <div classname="Image_Container">
                                 <div className="Image_wrapper">
                                 <img 
                                                src="https://images.pexels.com/photos/6675830/pexels-photo-6675830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                alt="Forth_Carousel"
                                       />
                                 </div>
                           </div>
                           <button className="CSC_Button">Coupons</button>
                        </div>

                        <div className="CSC_Box">
                           <div classname="Image_Container">
                                 <div className="Image_wrapper">
                                 <img 
                                                src="https://images.pexels.com/photos/3811807/pexels-photo-3811807.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                                alt="Forth_Carousel"
                                       />
                                 </div>
                           </div>
                           <button className="CSC_Button">Sneak Peak</button>
                        </div>

                        <div className="CSC_Box">
                           <div classname="Image_Container">
                                 <div className="Image_wrapper">
                                 <img 
                                                src="https://images.pexels.com/photos/6169186/pexels-photo-6169186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                alt="Forth_Carousel"
                                       />
                                 </div>
                           </div>
                           <button className="CSC_Button">Pre-Order</button>
                        </div>

                        <div className="CSC_Box">
                           <div classname="Image_Container">
                                 <div className="Image_wrapper">
                                 <img 
                                                src="https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                alt="Forth_Carousel"
                                       />
                                 </div>
                           </div>
                           <button className="CSC_Button">Waitlist</button>
                        </div>
                        
                  </div>
               </div>
            </div>
        </div>
      </div>
   )
}


export default Home