import React from 'react'

const CountDownTimer = ({ hoursMinSecs }) => {

    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);


    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0)
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


    return (
        <section className='countDownTimer' id='section1'>
            <div className="container-fluid">
                <div className="row justify-content-center ">
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <div className="content">
                            <span className='time hour'>{hrs.toString().padStart(2, '0')}<br />ساعت</span>:
                            <span className='time min'>{mins.toString().padStart(2, '0')}<br />دقیقه</span>:
                            <span className='time sec'>{secs.toString().padStart(2, '0')}<br />ثانیه</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-2">
                        <div className="content">
                            <h5>
                                فرصت باقی مانده از جشنواره
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountDownTimer;