import React from 'react';
import imgPom from "../../../assets/images/pomegranate.png";
import { Link as ScrollTo } from 'react-scroll';

const Header = () => {
    return (
        <header className="header">
            <div className="container-fluid m-0">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="content">
                            <h1>
                                یلدای ونوسی
                            </h1>
                            <div className="pomegranate-arrow">
                                <ScrollTo activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    duration={500}
                                    delay={10}
                                >
                                    <img src={imgPom} alt="arrow" />
                                </ScrollTo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;