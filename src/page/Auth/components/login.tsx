import { loginBanner, logoLogin } from 'assets/img';
import { Fb, Google } from 'assets/svg';
import React from 'react';
import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="login__banner" style={{ backgroundImage: `url(${loginBanner})` }}>
                <img src={logoLogin} alt="logoLogin" />
            </div>
            <div className="login__content">
                <h1>Xin Chào</h1>
                <p>Đăng nhập hoặc tạo tài khoản</p>
                <input type="text" placeholder="Nhập số điện thoại" />
                <button>Tiếp tục</button>
                <div className="login__ortherway">
                    <p>Hoặc tiếp tục bằng</p>
                    <div className="">
                        <div className="login__item">
                            <Google />
                            Google
                        </div>
                        <div className="login__item">
                            <Fb /> Facebook
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
