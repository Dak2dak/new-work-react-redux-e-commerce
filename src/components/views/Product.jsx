import React from 'react';
import '../styles/Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {

    return (
        <div className='single__card'>
            <div className="card" style={{width: "18rem", height: "22rem", borderRadius: "1rem"}}>
                <img className="card-img-top" src={require("../../images/picture1.png")} alt="Oups!" />
                <div className="card-body">
                    <h5 className="card-title">Product's name</h5>
                    <span>price</span>
                    <div className="card__buttons">
                        <button className="btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                        <button className="btn"><i className="fa-solid fa-cart-arrow-down"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;