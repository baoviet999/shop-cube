import { useAppSelector } from 'app/hook';
import { cardSelector } from 'page/Home/productSlice';
import React from 'react';
import './ConfirmBtn.scss';
const ConfirmBtn = () => {
    const card = useAppSelector(cardSelector);
    const totalPrice = card.reduce((acc, cur) => {
        return acc + cur.price * cur.count;
    }, 0);
    return (
        <div className="confirm__btn">
            <div>Đặt hàng {totalPrice}đ</div>
        </div>
    );
};

export default ConfirmBtn;
