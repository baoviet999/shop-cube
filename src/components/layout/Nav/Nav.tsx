import { Chat, Home, User } from 'assets/svg';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Nav.scss';
const Nav = () => {
    const NAV_ITEM = [
        {
            name: 'trang chủ',
            icon: <Home />,
            link: '/',
        },
        {
            name: 'Chat cửa hàng',
            icon: <Chat />,
            link: '/',
        },
        {
            name: 'Tài khoản',
            icon: <User />,
            link: '/me',
        },
    ];
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    return (
        <div className="nav">
            {NAV_ITEM.map((item, indx) => (
                <div
                    className={`nav__item ${activeTab === indx ? 'active' : ''}`}
                    key={indx}
                    onClick={() => {
                        navigate(`${item.link}`);
                        setActiveTab(indx);
                    }}
                >
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Nav;
