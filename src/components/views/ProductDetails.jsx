import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const ProductDetails = () => {

    const products = useSelector((state) =>state.products.products)
    const {productId} = useParams(); 

    const product = products.find(product => product.id === productId)

    
    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div> ...loading </div>
            ) : (
                <div className='card__details'>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={product.image} alt={product.image} />
                        <div className="card-body">
                            <h5 className="card-title">Description</h5>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                            nihil enim obcaecati ullam odit? Tenetur dicta, unde fugiat eaque
                            deserunt ad magni distinctio aliquam quis. Voluptatem quasi rerum
                            deserunt reiciendis perferendis veniam, sit odio cumque quo.
                            Doloribus ab possimus, maxime incidunt animi accusantium fugiat
                            assumenda quasi sapiente laboriosam rerum dolore?
                            </p>
                        </div>
                    </div>
                    <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header"> {product.title} </div>
                        <div className="card-body text-dark">
                            <h5 className="card-title"> {product.price} </h5>
                            <div className='card__buttons'>
                                <button className='btn'> 
                                    Buy 
                                </button>
                                <button className='btn'> 
                                    Back 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;