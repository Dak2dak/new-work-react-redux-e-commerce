import React from 'react';
import '../styles/Shoppingcart.css';

const ShoppingCart = () => {

    return (
        <div className='cart-body'>
            <h1 className="cart-title">Votre <span className="orange-title">Panier</span></h1>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th>NAME</th>
                        <th>UNIT PRICE</th>
                        <th>QUANTITY</th>
                        <th>DELETE</th>
                        <th >TOTAL PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="cell-1">
                            <img src="./img/picture1.png" alt="Oups!" />
                        </td>
                        <td>Air Jordan red</td>
                        <td><span>85</span></td>
                        <td>
                            <button className="increase_btn">
                                <span className="increase"><i className="fa-solid fa-plus"></i></span>
                            </button>
                            <span className="quantity"> 1 </span>
                            <button className="decrease_btn">
                                <span className="decrease"><i className="fa-solid fa-minus"></i></span>
                            </button>
                        </td>
                        <td>
                            <button className="cart-red-btn">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </td>
                        <td className="cell-6"> 85 </td>
                    </tr>
                    <tr>
                        <td className="cell-7">
                            <img src="./img/picture2.jpg" alt="Oups!" />
                        </td>
                        <td>Air Jordan white</td>
                        <td> 300 </td>
                        <td>
                            <button className="increase_btn">
                                <span className="increase"><i className="fa-solid fa-plus"></i></span>
                            </button>
                            <span className="quantity"> 1 </span>
                            <button className="decrease_btn">
                                <span className="decrease"><i className="fa-solid fa-minus"></i></span>
                            </button>
                        </td>
                        <td>
                            <button className="cart-red-btn">
                                <span><i className="fa-solid fa-xmark"></i></span>
                            </button>
                        </td>
                        <td className="cell-12"> 300 </td>
                    </tr>
                </tbody>
            </table>
            <div className="table__footer">
                <table className="table-2">
                    <tr>
                        <td className="mt">
                            <span>Total : </span>
                            <p><span className="star">*</span>Shopping costs are not included for now</p>
                        </td>
                        <td className="mt">
                            <button className="msg1">Continue shopping</button>
                        </td>
                        <td className="mt">
                            <button className="msg2">Confirm my order</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ShoppingCart;