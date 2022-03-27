import React from 'react';
import '../layout/Layout.css';
import Aside from '../layout/Aside.jsx';
import CarouselComponent from '.././views/CarouselComponent';

const LayoutComponent = () => {

    return (
        <div>
            <div className="container-fluid top-layout">
                <div className="container layout-container">
                    <div className="leftside">
                        <Aside />
                    </div>
                    <div className="middleside">
                        <CarouselComponent />
                    </div>
                    <div className="rightside">
                        <div className="rightside__box top-box"></div>
                        <div className="rightside__box bottom-box"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutComponent;