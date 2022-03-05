import React from 'react';
import '../styles/Shoppingcart.css';

const ShoppingCart = () => {

    return (
        <div className='cart-body'>
            <h1 class="cart-title">Votre <span class="orange-title">Panier</span></h1>
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
                        <td class="cell-1">
                            <img src="./img/picture1.png" alt="Oups!">
                        </td>
                        <td>Air Jordan red</td>
                        <td><span>85</span></td>
                        <td>
                            <button class="increase_btn">
                                <span class="increase"><i class="fa-solid fa-plus"></i></span>
                            </button>
                            <span class="quantity"> 1 </span>
                            <button class="decrease_btn">
                                <span class="decrease"><i class="fa-solid fa-minus"></i></span>
                            </button>
                        </td>
                        <td>
                            <button class="cart-red-btn">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </td>
                        <td class="cell-6"> 85 </td>
                    </tr>
                    <tr>
                        <td class="cell-7">
                            <img src="./img/picture2.jpg" alt="Oups!">
                        </td>
                        <td>Air Jordan white</td>
                        <td> 300 </td>
                        <td>
                            <button class="increase_btn">
                                <span class="increase"><i class="fa-solid fa-plus"></i></span>
                            </button>
                            <span class="quantity"> 1 </span>
                            <button class="decrease_btn">
                                <span class="decrease"><i class="fa-solid fa-minus"></i></span>
                            </button>
                        </td>
                        <td>
                            <button class="cart-red-btn">
                                <span><i class="fa-solid fa-xmark"></i></span>
                            </button>
                        </td>
                        <td class="cell-12"> 300 </td>
                    </tr>
                </tbody>
            </table>
            <div className="table__footer">
                <table class="table-2">
                    <tr>
                        <td class="mt">
                            <span>Total : </span>
                            <p><span class="star">*</span>Shopping costs are not included for now</p>
                        </td>
                        <td class="mt">
                            <button class="msg1">Continue shopping</button>
                        </td>
                        <td class="mt">
                            <button class="msg2">Confirm my order</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ShoppingCart;