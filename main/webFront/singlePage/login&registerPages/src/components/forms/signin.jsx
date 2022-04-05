import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import validate from '../../utils/formValidate';
import { notify } from '../../utils/notification';
import { Link } from 'react-router-dom';


const SignIn = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});


    useEffect(() => {
        setErrors(validate(data, "SignIn"));
    }, [data]);


    const onSubmit = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            console.log(data);
            notify("You Signed Up Successfully :)", "success");
        } else {
            setTouched({
                email: true,
                password: true
            });
            notify("Data is invalid! try again.", "error");
        }
    }


    const onChangeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked });
        } else {
            setData({ ...data, [event.target.name]: event.target.value });
        }
    }


    const onTouchedHandler = event => {
        if (event.target.name !== "isAccepted") {
            setTouched({
                ...touched,
                [event.target.name]: true
            });
        }
    }


    return (
        <div className='wrapper'>
            <ToastContainer />

            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={onSubmit} className="zpForm">
                <h3>Sign In</h3>
                <br /><br />
                <label htmlFor="email">Email</label>
                <input
                    onChange={onChangeHandler}
                    type="email"
                    name='email'
                    placeholder="Your email"
                    id="email"
                    onFocus={onTouchedHandler}
                />
                {errors.email && touched.email && <span className='input-error'>{errors.email}</span>}

                <label htmlFor="password">Password</label>
                <input
                    onChange={onChangeHandler}
                    type="password"
                    name='password'
                    placeholder="Your Password"
                    id="password"
                    onFocus={onTouchedHandler}
                />
                {errors.password && touched.password && <span className='input-error'>{errors.password}</span>}

                <button type="submit">Log In</button>
                <div className="have-account">
                    Dont Have An Account! <Link to="/signup">SignUp</Link>
                </div>
                <br /><br /><br />
            </form>
        </div>
    );
}

export default SignIn;