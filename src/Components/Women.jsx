import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './index.css'
import Loader from "./Loader";
import Error from "./Error";


   const Women = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const limit = 10; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/category');
            // Calculating Total Items and Total Pages:
                const totalItems = response.data.length;
                const totalPagesCount = Math.ceil(totalItems / limit);
                setTotalPages(totalPagesCount);
            // Slicing Data for Pagination:
                const paginatedProducts = response.data.slice(0, currentPage * limit);
            // Updating State with Paginated Data
                setProducts(paginatedProducts);
                setLoading(false);
            } catch (error) {
               if(error.response) {
                  setError('...Failed to fetch products. Server error.')
               } 
               else if(error.request) {
                  setError('...Failed to fetch products. No response received.');
               } 
               else {
                  setError('...Failed to fetch products. Unknown error occurred.');
               }
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, limit]);

    const loadMoreProduct = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const truncateTitle = (title, maxLength) => {
      if (title.length > maxLength) {
          return title.substring(0, maxLength) + '...';
      }
      return title;
  };

    return (
        <div className="Products">
            <div className="Product_Message">
                <h3>Welcome to Women's Clothing...Shop at your desire!</h3>
            </div>

            {error && <Error message={error} />}

           {products.length > 0 && (
             <div className="Products_List" style={{padding:products.length > 0 ? "10px 5px": ""}}>
               {products.map((Product, index) => (
                  <div className="Specific_Product" key={index}>
                        <div className="Image_Wrap">
                           <img className="Images" src={Product.image} alt={Product.title} />
                        </div>
                        <Link to={`/products/${Product.id}`}>
                           {truncateTitle(Product.title, 23)}
                        </Link>
                        <div className="Product_Footer">
                           <h4><b>$ </b>{Product.price}</h4>
                           <h4>{Product.category}</h4>
                        </div>
                  </div>
               ))}
         </div>
           )}
            
            {currentPage < totalPages && (
                <button className="Load_Button" onClick={loadMoreProduct}>Load More</button>
            )}

            {loading && <Loader />} 
        </div>
    );
};

export default Women;
