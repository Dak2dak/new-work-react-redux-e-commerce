import React from 'react';
import './GoBack.css';
import { useEffect, useState } from 'react';

const GoBack = () => {

    const [scrollUpBtn, setScrollUpBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setScrollUpBtn(true)
            }
            else {
                setScrollUpBtn(false)
            }
        });
    }, [])

    const scrollUp = () => {
        window.scrollTo ({
            top: 0,
            behavior: "smooth",
        })
    }
    

    return (
        <div>
            {scrollUpBtn && (
                <div 
                    className="fixed__button"
                    onClick={scrollUp}
                >
                    <button className="floating">
                        <i className="fa-solid fa-arrow-up"></i>
                    </button>
                </div>
            )}
        </div>
    );
}

export default GoBack;