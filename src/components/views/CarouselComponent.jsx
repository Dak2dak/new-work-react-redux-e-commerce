import '../styles/Slide.css';
import React from 'react';
import myImage1 from '../../images/image1.jfif';
import myImage2 from '../../images/image2.jfif';
import myImage3 from '../../images/image3.jfif';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {

        return (
            <Carousel className='main__slide'>
                <div>
                    <img src={myImage1} alt='takeALook' width={300} height={362} />
                </div>
                <div>
                    <img src={myImage2} alt='takeALook' width={300} height={362} />
                </div>
                <div>
                    <img src={myImage3} alt="takeALook" width={300} height={362} />
                </div>
            </Carousel>
        );

}

export default CarouselComponent;
