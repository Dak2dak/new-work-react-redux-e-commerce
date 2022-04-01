import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Details.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions/products';


const ProductDetails = () => {

    let product = {};
    const id = useParams().id; 
    const products = useSelector((state) =>state.products.products);

    if(products) {
        product = products.find(product => product.id === parseInt(id));
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleProduct())
    }, [dispatch]);

    const navigate = useNavigate();
    const getBack = () => {
        navigate('/')
    }
    
    return (
        <div>
            {Object.keys(products).length === 0 ? (
                <div> ...loading </div>
            ) : (
                (product) ? (
                    <div className='container card__details'>
                    <div className="product__pg">
                        <div className="product-img-box">
                            <img className="product-img" src={product.image} alt={product.image} />
                        </div>
                        <div className="product-body">
                            <h5 className="product-title-1">Description</h5>
                            <p className="product-text"> {product.description} </p>
                        </div>
                    </div>
        
                    <div className="product">
                        <div className="card-header"> 
                                { (product.title.length > 10) ? 
                                    product.title.substring(0, 13) + '...'  : product.title }
                        </div>
                        <div className="card-body text-dark">
                            <h5 className="product-title-2">price: {product.price} €</h5>
                            <div className='card__buttons'>
                                <button className="product-btn"> 
                                    Buy 
                                </button>
                                <button 
                                    className="product-btn" 
                                    onClick={getBack}
                                > 
                                    Back 
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                ) : ("")
            )}
        </div>
    );
}

export default ProductDetails;