import React, { Component } from 'react';
import getBanners from "../../../../services/banners";


class Banners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        };
        this.from = props.from;
        this.to = props.to;
    }

    componentDidMount() {
        const banners = getBanners();
        this.setState({
            banners
        })
    }
    render() {
        return (
            <section className='banners'>
                <div className="container-fluid mt-5">
                    <div className="row">
                        {
                            this.state.banners.slice(this.from, this.to).map(banner => {
                                return (
                                    <div className="col-12 col-md-6 mb-5 mb-md-0" key={banner.id}>
                                        <div className="content">
                                            <div className="banner">
                                                <div className="banner-img">
                                                    <a href="banner">
                                                        <img src={banner.imgUrl} alt="banner" height="300px" className='w-100' />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Banners;