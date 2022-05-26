import { footer } from 'assets/img';
import React from 'react';
import './Footer.scss';
const Footer = () => {
    return (
        <div className="footer">
            <a href="home">
                <img src={footer} alt="" />
            </a>
            <span>Mở cửa hàng số trong 30 giây. MIỄN PHÍ</span>
        </div>
    );
};

export default Footer;
