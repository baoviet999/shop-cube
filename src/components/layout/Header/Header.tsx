import { Search, Share } from 'assets/svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
const Header = () => {
    const [active, setActive] = useState<Boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleShrink = () => {
            if (window.scrollY > 100) setActive(true);
            else setActive(false);
        };
        window.addEventListener('scroll', handleShrink);
        return () => window.removeEventListener('scroll', handleShrink);
    }, []);

    return (
        <div className={`header ${active ? 'active' : ''}`}>
            <div className="header__inner">
                <div className="header__search" onClick={() => navigate('/search')}>
                    <div className="header__icon header__icon--search">
                        <Search />
                    </div>
                    <span>Tìm kiếm sản phẩm</span>
                </div>
                <div className="header__share">
                    <div className="header__icon">
                        <Share />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
