import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {register, reset} from "../features/auth/authSlice";
import {Spinner} from "../components/Spinner/Spinner.jsx";

export const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });

    const { username, email, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth);

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/dashboard')
        }

        dispatch(reset());
    }, [user, isSuccess, isError, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(password !== password2) {
            toast.error('Invalid password confirmation')
        } else {
            const userData = {
                username,
                email,
                password,
            }

            dispatch(register(userData));
        }
    }

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <div className="form-wrapper">
                <div className="heading">
                    <h1>Register</h1>
                    <p>Please create an account</p>
                </div>

                <section className="form">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={username}
                                placeholder="Enter your name"
                                onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Enter password"
                                onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="password2"
                                name="password2"
                                value={password2}
                                placeholder="Confirm password"
                                onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-block">Submit</button>
                        </div>
                        <p>Already a member? <Link to={'/login'}><span className="form-link">Login</span></Link></p>
                    </form>
                </section>
            </div>
        </>
    )
};