import React, { Component } from 'react';
import "../../assets/css/main.css";
import Footer from '../partials/footer/footer';
import Header from '../partials/header/Header';
import MainSection from '../partials/mainSection/mainSection';
import Navbar from '../partials/navbar/navbar';


class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Navbar />
                <section>
                    <MainSection />
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Landing;