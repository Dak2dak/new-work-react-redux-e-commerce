import React from 'react';
import './GoBack.css';

const GoBack = () => {

    return (
        <div>
            <div className="fixed__button">
                <button className="floating">
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            </div>
        </div>
    );
}

export default GoBack;