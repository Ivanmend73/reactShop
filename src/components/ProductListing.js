import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from "../redux/actions/productActions";
//axios
import axios from "axios";
import Footer from './Footer';
//css
import "../App.css"


const ProductListing = () => {

  const products = useSelector((state)=> state);
  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((error) => {
      console.log("ERROR:",error)
    })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts();
    console.log("Products:", products)
  },[])


  return (
    <div className='ui grid container' id="content__listing">
      <ProductComponent id="product__listing"/>
      <Footer/>
    </div>
  )
}

export default ProductListing