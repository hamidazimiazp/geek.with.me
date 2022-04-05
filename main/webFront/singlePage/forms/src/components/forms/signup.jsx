import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import validate from '../../utils/formValidate';
import { notify } from '../../utils/notification';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});


    useEffect(() => {
        setErrors(validate(data, "signUp"));
    }, [data]);


    const onSubmit = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            console.log(data);
            notify("You Signed Up Successfully :)", "success");
        } else {
            setTouched({
                username: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
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
                <h3>Sign Up</h3>

                <label htmlFor="username">Username</label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name='username'
                    placeholder="Your username"
                    id="username"
                    onFocus={onTouchedHandler}
                />
                {errors.username && touched.username && <span className='input-error'>{errors.username}</span>}

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

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    onChange={onChangeHandler}
                    type="password"
                    name='confirmPassword'
                    placeholder="Confirm The Password"
                    id="confirmPassword"
                    onFocus={onTouchedHandler}
                />
                {errors.confirmPassword && touched.confirmPassword && <span className='input-error'>{errors.confirmPassword}</span>}

                <div className="isAccepted">
                    <label htmlFor="isAccepted" className="isAccepted">I accet terms of privacy policy</label>
                    <input
                        onChange={onChangeHandler}
                        type="checkbox"
                        name="isAccepted"
                        className="isAccepted"
                        id="isAccepted"
                        onFocus={onTouchedHandler}
                    />
                </div>
                {errors.isAccepted && touched.isAccepted && <span className='input-error'>{errors.isAccepted}</span>}

                <button type="submit">Log In</button>
                <div className="have-account">
                    Already Have An Account! <Link to="/signin">SignIn</Link>
                </div>
            </form>
        </div>
    );
}

export default SignUp;