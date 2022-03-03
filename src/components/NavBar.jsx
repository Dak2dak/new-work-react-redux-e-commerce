import React from 'react';
import '../components/Navbar.css';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-12">
                    <div className="horizontal__scrolling--text">
                        <span>THE BEST ONLINE SHOP OF IVORY COAST</span>
                    </div>
                    <nav className="navbar container">
                        <div className="shop__logo">
                            <button>Dak-shop</button>
                            {/* <img src={require("../images/logo.jpg")} alt="" /> */}
                        </div>
                        <div className="nav__middle">
                            <div className="nav__menu">
                                <ul>
                                    <li>Products</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                            <div class="input-group">
                                <div class="form-outline">
                                    <input type="search" id="form1" class="form-control" placeholder='Search...' />
                                    <button type="button" class="btn">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="nav__right">
                            <button className='btn btn-custom'>
                                Cart <i class="fa-solid fa-cart-arrow-down"></i>
                            </button>
                            <button className='btn btn-custom'>
                                Login <i class="fa-solid fa-user"></i>
                            </button>
                        </div>
                    </nav>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar;