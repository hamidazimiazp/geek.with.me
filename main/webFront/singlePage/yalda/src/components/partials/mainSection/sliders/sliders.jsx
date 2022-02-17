import React, { Component } from 'react';
import getHats from '../../../../services/hats';
import getGlasses from '../../../../services/glasses';
import SimpleSlider from './simpleSlider1/simpleSlider1';


class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            glasses: getGlasses(),
            hats: getHats(),
        }
    }

    render() {

        return (
            <section id='section2'>
                <section className="slider">
                    <div className="section-title">
                        <h3>
                            عینک های ونوسی
                        </h3>
                    </div>
                    <SimpleSlider data={this.state.glasses} />
                </section>
                <section className="slider">
                    <div className="section-title">
                        <h3>
                            کلاه های ونوسی
                        </h3>
                    </div>
                    <SimpleSlider data={this.state.hats} />
                </section>
            </section>
        );
    }
}

export default Sliders;