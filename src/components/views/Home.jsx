import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
import Aside from '../layout/Aside';
import ContactUs from './ContactUs';
import CarouselComponent from './CarouselComponent'

const Home = () => {

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-12">
                    <Aside />
                    <CarouselComponent />
                    <Products />
                    <ContactUs />
                </div>
            </div>

            <footer className='home__footer'>
                <div className="social__media">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <span> © 2022 Copyright : Dakshop225 </span>
            </footer>
        </div>
    )
}

export default Home;