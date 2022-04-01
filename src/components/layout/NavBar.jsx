import React from 'react';
import '../layout/Navbar.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-12">
                    <div className="horizontal__scrolling--text">
                        <div className="scroll">
                            <span>THE BEST ONLINE SHOP OF IVORY COAST</span>
                        </div>
                    </div>
                    <div className="container-fluid nav-div">
                        <nav className="navbar container">
                                <div className="shop__logo">
                                    <Link to={`/`}>
                                        <button>Dak-shop</button>
                                    </Link>
                                    <img src={require("../../images/logo.jpg")} alt="logo" />
                                </div>
                            <div className="nav__middle">
                                <div className="nav__menu">
                                    <ul>
                                        <li>
                                            <Link to='/Products' className='remove__text-decoration clr-black'>Products</Link>
                                        </li>
                                        <li>
                                            <Link to='/ContactUs' className='remove__text-decoration clr-black'>Contact us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="input-group">
                                    <div className="form-outline">
                                        <input type="search" id="form1" className="form-control" placeholder='Search...' />
                                        <button type="button" className="btn">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="nav__right">
                                <button className='btn btn-custom'>
                                    Cart <i className="fa-solid fa-cart-arrow-down"></i>
                                </button>
                                <button className='btn btn-custom'>
                                    Login <i className="fa-solid fa-user"></i>
                                </button>
                            </div>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar;