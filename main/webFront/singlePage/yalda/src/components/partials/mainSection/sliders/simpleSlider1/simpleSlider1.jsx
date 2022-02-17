import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import pomImg from "../../../../../assets/images/pomegranate.png";
import watermelonImg from "../../../../../assets/images/watermelon.png";

class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.data = props.data
    }
    render() {
        return (
            <section className='slider'>
                <Swiper
                    spaceBetween={30}
                    className="SimpleSlider"
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                >
                    {
                        this.data.map(item => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <a href="/product" className='product'>
                                        <div className="card glass-card">
                                            <div className="pomegranate">
                                                <img src={(item.id % 2 === 0) ? pomImg : watermelonImg} alt="pomegranate" />
                                            </div>
                                            <div className="glass-card-header">
                                                <img src={item.imgUrl} alt="" />
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className="glass-card-body">
                                                <div className='price'>
                                                    <span className='new-price'>
                                                        <span className="amount">{item.newPrice}</span>
                                                        <span className="amountLabel">
                                                            تومان
                                                        </span>
                                                    </span>
                                                    <span className='old-price text-center '>
                                                        <del>{item.oldPrice}</del>
                                                    </span>
                                                </div>
                                                <div className="info">
                                                    <div className="discount">
                                                        {item.discount + "%"}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="glass-card-footer">
                                                <div className='progress-counter one' />
                                                <div className='progress-counter two' style={{ width: item.count * 2 + "%" }} />
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            );
                        })
                    }

                    <SwiperSlide style={{ display: "none" }}>
                    </SwiperSlide>
                </Swiper>
            </section>
        );
    }
}

export default SimpleSlider;