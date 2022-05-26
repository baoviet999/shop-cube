import { plhd, product1 } from 'assets/img';
import { Dot, Prev, Search } from 'assets/svg';
import Footer from 'components/layout/Footer/Footer';
import Nav from 'components/layout/Nav/Nav';
import Popup from 'components/layout/PopupFilter/PopupFilter';
import ProductsList from 'components/layout/ProductsList/ProductsList';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.scss';
const SearchPage = () => {
    const [popup, setPopup] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="search">
            <div className="search__header">
                <div className="search__header--top">
                    <div className="search__header--prev" onClick={() => navigate('/')}>
                        <Prev />
                    </div>
                    <div className="search__input">
                        <Search />
                        <input type="text" placeholder="Tìm kiếm sản phẩm" />
                    </div>
                </div>
                <div className="search__header--filter">
                    <div>
                        <div className="search__header--filter-item first">
                            <h1>Tất cả</h1>
                        </div>
                        <div className="search__header--filter-item">
                            <img src={product1} alt="" />
                            <h3>Sen đá</h3>
                        </div>
                    </div>
                    <Dot onClick={() => setPopup(true)} />
                </div>
            </div>

            
            <div className="search__content">
                <ProductsList />
            </div>


            <Footer />
            <Nav />


            <Popup active={popup} setOpenPopup={setPopup}>
                <div className="search__filter">
                    <div className="search__filter--item" style={{ backgroundImage: `url(${plhd})` }}>
                        <h1>Tất cả (2)</h1>
                    </div>
                    <div className="search__filter--item" style={{ backgroundImage: `url(${product1})` }}>
                        <div>
                            <h3>Sen đá</h3>
                            <span>(3)</span>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default SearchPage;
