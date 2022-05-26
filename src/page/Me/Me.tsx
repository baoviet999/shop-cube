import { me } from 'assets/img';
import { Card, Next } from 'assets/svg';
import Footer from 'components/layout/Footer/Footer';
import Nav from 'components/layout/Nav/Nav';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Me.scss';
const Me = () => {
    const navigate = useNavigate();
    
    return (
        <div className="me">
            <div className="me__banner"></div>
            <div className="me__custommer">
                <img src={me} alt="" />
                <h3>Khách hàng</h3>
            </div>
            <div className="me__card">
                <div className="me__card--left">
                    <Card />
                    <p>Đơn hàng của bạn</p>
                </div>
                <Next />
            </div>
            <div className="me__auth">
                <p>Để xem thông tin các đơn hàng đã đặt cho lần tiếp theo, vui lòng đăng ký tài khoản</p>
                <div className="me__login" onClick={() => navigate('/login')}>
                    Đăng ký
                </div>
                <div className="me__register">
                    Hoặc <Link to="/login">Đăng nhập</Link>
                </div>
            </div>
            <Footer />
            <Nav />
        </div>
    );
};

export default Me;
