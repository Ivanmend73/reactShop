import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import "../App.css"

const ProductComponent = () => {

    const products = useSelector((state)=> state.allProducts.products)
    const renderList = products.map((product)=>{
        const { id,title,image,price,category } = product;
    return (
        <div className='casa' key={id}>
            <Link to={`/products/${id}`}>
                <div className='ui link cards' id="card__component">
                    <div className='card'>
                        <div className='image'>
                            <img src={image} />
                        </div>
                        <div className='content'>
                            <div className='header'>{title}</div>
                            <div className='meta price'>${price}</div>
                            <div className='meta'>{category}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
  )
})
return (
    <>{renderList}</>
)
}

export default ProductComponent