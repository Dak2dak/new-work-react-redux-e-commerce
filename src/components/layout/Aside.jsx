import React from 'react';
import '../layout/Aside.css';

const Aside = () => {

    return (
        <div>
            <aside>
                <div className="articles">
                    <button className="single-article">
                        <div className="icon-box">
                            <i className="fa-solid fa-shoe-prints"></i>
                        </div>
                        <span className="article-name">Shoes</span>
                    </button>
                    <button className="single-article">
                        <div className="icon-box">
                            <i className="fa-solid fa-shoe-prints"></i>
                        </div>
                        <span className="article-name">Watch</span>
                    </button>
                    <button className="single-article">
                        <div className="icon-box">
                            <i className="fa-solid fa-shirt"></i>
                        </div>
                        <span className="article-name">Shirt</span>
                    </button>
                    <button className="single-article">
                        <div className="icon-box">
                            <i className="fa-solid fa-mobile"></i>
                        </div>
                        <span className="article-name">Telephone</span>
                    </button>
                    <button className="single-article">
                        <div className="icon-box">
                            <i className="fa-solid fa-laptop"></i>
                        </div>
                        <span className="article-name">Computer</span>
                    </button>
                    <button className="single-article">
                        <div className="icon-box">
                            <i className="fa-solid fa-tv"></i>
                        </div>
                        <span className="article-name">Electronic</span>
                    </button>
                    <button className="single-article">
                        <div className="icon-box">
                            <i className="fa-solid fa-trophy"></i>
                        </div>
                        <span className="article-name">Appliances</span>
                    </button>
                </div>
            </aside>
        </div>
    )
}

export default Aside;