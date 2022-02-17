import React from 'react'


const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="content mt-5 mb-3">
                                <div className="left-content">
                                    <button className='btn-invite'>
                                        دعوت
                                    </button>
                                </div>
                                <div className="right-content">
                                    با دعوت از دوستان خود و خرید توسط آن ها از 25 هزار تومان تخفیف برخوردار شوید!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;