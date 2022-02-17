import React, { Component } from 'react';
import CountDownTimer from './timer/timer';
import GiftSection from './giftSection/giftSection';
import Sliders from './sliders/sliders';
import Categories from './categories/categories';
import Banners from './banners/banners';
import Comments from './comments/comments';

class MainSection extends Component {

    render() {
        const hoursMinSecs = { hours: 1, minutes: 20, seconds: 40 }
        return (
            <main>
                <CountDownTimer hoursMinSecs={hoursMinSecs} />
                <GiftSection />
                <Sliders />
                <Banners from="0" to="2" />
                <Categories />
                <Banners from="2" to="4" />
                <section className="slider">
                    <div className="section-title">
                        <h3>
                            نظرات شما
                        </h3>
                    </div>
                    <Comments />
                </section>
                <Banners from="4" to="6" />
            </main>
        );
    }
}

export default MainSection;