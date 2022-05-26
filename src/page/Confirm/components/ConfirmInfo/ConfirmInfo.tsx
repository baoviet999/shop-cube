import { useAppSelector } from 'app/hook';
import { Next, Sale } from 'assets/svg';
import { cardSelector } from 'page/Home/productSlice';
import React from 'react';
import './ConfirmInfo.scss';
const ConfirmInfo = () => {
    const card = useAppSelector(cardSelector);
    const totalPrice = card.reduce((acc, cur) => {
        return acc + cur.price * cur.count;
    }, 0);
    return (
        <div className="confirm__info">
            <h4>Thông tin thanh toán</h4>
            <div className="confirm__info--content">
                <div className="confirm__info--sale">
                    <span>Khuyến mại</span>
                    <div className="confirm__info--btn">
                        <Sale />
                        <span>Chọn khuyến mãi</span>
                        <Next />
                    </div>
                </div>
                <div className="confirm__info--price">
                    <h3>Tổng {card.length} sản phẩm</h3>
                    <h3>{totalPrice}đ</h3>
                </div>
                <div className="confirm__info--price">
                    <h3>Phí vận chuyển</h3>
                    <h3>0đ</h3>
                </div>
                <div className="confirm__info--total">
                    <h3>Tổng cộng</h3>
                    <h3>{totalPrice}đ</h3>
                </div>
            </div>
        </div>
    );
};

export default ConfirmInfo;
