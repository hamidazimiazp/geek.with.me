import React from 'react';
import navImg1 from "../../../assets/images/nav-img-1.jpg";
import navImg2 from "../../../assets/images/nav-img-2.jpg";
import navImg3 from "../../../assets/images/nav-img-3.jpg";



const Navbar = () => {
    return (
        <nav className="navbar">
            <input type="checkbox" id="check" className="checkbox" />
            <div className="hamburger-menu">
                <label htmlFor="check" className="menu">
                    <div className="menu-line menu-line-1"></div>
                    <div className="menu-line menu-line-2"></div>
                    <div className="menu-line menu-line-3"></div>
                </label>
            </div>
            <div className="navbar-navigation">
                <div className="navbar-navigation-left">
                    <img src={navImg1} alt="yalda" className="left-img left-img-1" />
                    <img src={navImg3} alt="yalda" className="left-img left-img-2" />
                    <img src={navImg2} alt="yalda" className="left-img left-img-3" />
                </div>
                <div className="navbar-navigation-right">
                    <ul className="nav-list">
                        <li className="nav-list-item"><a href="/Home" className="nav-list-link">خانه</a></li>
                        <li className="nav-list-item"><a href="/gallery" className="nav-list-link">فروشگاه</a></li>
                        <li className="nav-list-item"><a href="/services" className="nav-list-link">سرویس ها</a></li>
                        <li className="nav-list-item"><a href="/contact" className="nav-list-link">تماس با ما</a></li>
                        <li className="nav-list-item"><a href="/about" className="nav-list-link">درباره ما</a></li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;