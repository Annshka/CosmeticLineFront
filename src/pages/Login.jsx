import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import {login, reset} from "../features/auth/authSlice";
import {Spinner} from "../components/Spinner/Spinner.jsx";
import {useDispatch, useSelector} from "react-redux";


export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

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
        }))
    };

    const  onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <div className="form-wrapper">
                <div className="heading">
                    <h1>Login</h1>
                    <p>Login and start setting your packaging</p>
                </div>

                <section className="form">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={onChange}
                            />
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
                            <button type="submit" className="btn btn-block">Submit</button>
                        </div>
                        <p>Don't have an account yet? <Link to={'/register'}><span
                            className="form-link">Register now</span></Link></p>
                    </form>
                </section>
            </div>
        </>
    )
}