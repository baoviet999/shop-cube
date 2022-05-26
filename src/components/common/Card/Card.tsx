import { useAppSelector } from 'app/hook';
import { BagItem } from 'assets/svg';
import { cardSelector } from 'page/Home/productSlice';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';
const Card = () => {
    const card = useAppSelector(cardSelector);
    const totalPrice = card.reduce((acc: any, cur: any) => {
        return acc + cur.price * cur.count;
    }, 0);
    const navigate = useNavigate();
    return (
        <div className={`card ${card.length > 0 && 'active'}`}>
            <div className="card__left">
                <div>{card.length}</div>
                <BagItem />
                <h1>{totalPrice}đ</h1>
            </div>
            <h1 onClick={() => navigate('/confirm')}>Xem giỏ hàng</h1>
        </div>
    );
};

export default Card;
