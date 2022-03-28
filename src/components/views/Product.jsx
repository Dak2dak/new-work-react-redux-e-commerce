import React from 'react';
import '../styles/Products.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SkeletonElement from "./SkeletonElement";

const Product = (props) => {
    const {products} = props;
    
    return (
        <div className='list'>

            {/* <SkeletonElement type="Text" />
            <SkeletonElement type="title" />
            <SkeletonElement type="rectangle" /> */}

            {products.map((product) => 
                (
                    <Link to={`/product/${product.id}`} >
                        <div className='single__card' key={product.id}>
                            <div className="card" style={{width: "18rem"}}>
                                <div className="card-img-box">
                                    <img className="card-img-top" src={product.image} alt="Oups!" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        { (product.title.length > 10) ? 
                                            product.title.substring(0, 13) + '...'  : product.title }
                                    </h5>
                                    <span> {product.price} € </span>
                                    <div className="card__buttons">
                                        <button className="btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        <button className="btn"><i className="fa-solid fa-cart-arrow-down"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            )}
        </div>
    )
}

export default Product;