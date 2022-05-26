import { avt } from 'assets/img';
import { Bag, Heart, Info, Location, Next, Phone, Zalo } from 'assets/svg';
import React from 'react';
import './ShopInfo.scss';
export const HEADER_ICON = [
    {
        icon: <Phone />,
        link: 'tel:0933620034',
        color: '#e0f2ed',
    },
    {
        icon: <Zalo />,
        link: 'https://zalo.me/0933620034',
        color: 'rgba(33,93,216,.1)',
    },
    {
        icon: <Heart />,
        link: '',
        color: 'rgba(255,72,66,.08);',
    },
    {
        icon: <Info />,
        link: '',
        color: '#e0f2ed',
    },
];
const ShopInfo = () => {
    
    return (
        <div className="shop-info">
            <div className="shop-info__inner">
                <div className="shop-info__header">
                    <div className="shop-info__header--avt">
                        <img src={avt} alt="avt" />
                    </div>
                    <div className="shop-info__header--contact">
                        {HEADER_ICON.map((icon, indx) => (
                            <a
                                key={indx}
                                href={icon.link}
                                className="shop-info__header--icon"
                                style={{ background: `${icon.color}` }}
                            >
                                {icon.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="shop-info__content">
                    <h1>Shop Mẹ Kem</h1>
                    <div className="shop-info__title">
                        <Bag />
                        <span>1+ lượt đặt</span>
                    </div>
                    <div className="shop-info__title">
                        <Location />
                        <span>B26 Tô Vĩnh Diện, Phường 6, Đà Lạt, Lâm Đồng</span>
                        <Next />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopInfo;
