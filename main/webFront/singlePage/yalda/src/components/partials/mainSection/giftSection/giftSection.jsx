import React, { Component } from 'react';
import getGifts from "../../../../services/gifts";
import { Link as ScrollTo } from 'react-scroll';
import nextImg from "../../../../assets/images/next.png";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


class GiftSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifts: [],
        }
        this.discountCode = React.createRef();
        this.discountTitle = React.createRef();
        this.giftCenterCover = React.createRef();
        this.giftContainer = React.createRef();

        this.giftClickHandler = this.giftClickHandler.bind(this);
        this.copyHashHandler = this.copyHashHandler.bind(this);
    }
    componentDidMount() {
        const gifts = getGifts();
        this.setState({
            gifts
        });
    }

    giftClickHandler(code, title) {
        // replace view
        let htmlCollection = this.giftContainer.current.children;
        let arr = Array.from(htmlCollection);
        arr.map(item => item.remove());
        this.giftCenterCover.current.style.display = "block";

        // code & title inject
        this.discountCode.current.innerHTML = code;
        this.discountTitle.current.innerHTML = title;

    }

    copyHashHandler(hash) {
        navigator.clipboard.writeText(hash).then(
            toast.success('کد تخفیف با موفقیت کپی شد')
        )
    }


    render() {
        return (
            <section className='giftCenter'>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="giftCenter-cover" ref={this.giftCenterCover}>
                    <div className="pomegranate-arrow next-arrow">
                        <ScrollTo activeClass="active" style={{ direction: "rtl", textAlign: "right" }}
                            to="section2"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            delay={10}
                        >
                            <img src={nextImg} alt="next" />
                        </ScrollTo>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center ">
                            <div className="col-12">
                                <div className="content mt-5 text-center ">
                                    <h2>
                                        تبریک! برنده شدی
                                    </h2>
                                    <div className="discount-input-group">
                                        <div className="input" ref={this.discountCode}>
                                            XXXXXXXX
                                        </div>
                                        <div className="icon" onClick={() => { this.copyHashHandler(this.discountCode.current.innerHTML) }}>
                                            <i className='fa fa-copy'></i>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='discount-title' ref={this.discountTitle}>
                                    XXXXXXXX
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-5" style={{ minHeight: "100vh" }} ref={this.giftContainer}>
                    <div className="row one text-center mt-3">
                        <h2>
                            شانستو امتحان کن
                        </h2>
                    </div>
                    <div className="row two justify-content-evenly text-center">
                        {
                            this.state.gifts.map(gift => {
                                return (
                                    <div className="col-6 col-sm-4 col-md-3 mt-5 mb-5" key={gift.id}>
                                        <div className="content">
                                            <img src={gift.imgUrl} alt="gift" onClick={() => { this.giftClickHandler(gift.code, gift.title) }} />
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

export default GiftSection;