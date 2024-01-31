import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader"
import Toastify from "./utils/Toastify";

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard/home');
            Toastify({ message: "Đăng nhập thành công!", type: "success" });
        }, 1000);

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-3 rounded w-25 border loginForm">
                {!loading &&
                    <>
                        <h2 className="text-center">Đăng nhập</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email"><strong>Email:</strong></label>
                                <input type="email" name="email" autoComplete="off" placeholder="Nhập Email"
                                    className="form-control rounded-0" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password"><strong>Mật khẩu:</strong></label>
                                <input type="password" name="password" placeholder="Nhập mật khẩu"
                                    className="form-control rounded-0" />
                            </div>
                            <button className="btn btn-success w-100 rounded-0">Đăng nhập</button>
                        </form>
                    </>}
                {loading &&
                    <div className="d-flex justify-content-center align-items-center">
                        <PulseLoader color="#36d7b7"></PulseLoader>
                    </div>
                }
                {/* <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" name="email" autoComplete="off" placeholder="Nhập Email"
                         className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Mật khẩu:</strong></label>
                        <input type="password" name="password" placeholder="Nhập mật khẩu"
                         className="form-control rounded-0"/>
                    </div>
                    <button className="btn btn-success w-100 rounded-0">Đăng nhập</button>
                </form> */}
            </div>
        </div>
    )
}

export default Login