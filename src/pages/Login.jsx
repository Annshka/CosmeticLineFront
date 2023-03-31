import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

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
                        <p>Don't have an account yet? <Link to={'/register'}><span className="form-link">Register now</span></Link></p>
                    </form>
                </section>
            </div>
        </>
    )
}