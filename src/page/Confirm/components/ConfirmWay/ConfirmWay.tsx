import { COD } from 'assets/svg';
import React from 'react';
import './ConfirmWay.scss'
const ConfirmWay = () => {
    return (
        <div className="confirm__way">
            <h4>
                Phương thức thanh toán<span>*</span>
            </h4>
            <div className="confirm__way--content">
                <div className="confirm__way--logo">
                    <COD />
                    <div className="confirm__way--title">
                        <h4>Thanh toán tiền mặt - COD</h4>
                        <span>Nhận hàng - trả tiền</span>
                    </div>
                </div>
                <div className="confirm__way--check">
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmWay;
