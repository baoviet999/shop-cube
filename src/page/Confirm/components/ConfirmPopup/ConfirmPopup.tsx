import { Location, Pick, Ship } from 'assets/svg';
import Input from 'components/common/Input/Input';
import React from 'react';
// import '../ConfirmCheckout/ConfirmCheckout.scss';
interface ConfirmProps {
    way: number;
    setWay: (way: number) => void;
}

const ConfirmPopup = ({ way, setWay }: ConfirmProps) => {
    return (
        <>
            <div className="popup__confirm">
                <div className={`confirm__checkout--list`}>
                    <div
                        className={`confirm__checkout--item ${way === 0 && 'active'}`}
                        onClick={() => setWay(0)}
                    >
                        <div className="confirm__checkout--img">
                            <Pick />
                            <span>Tự lấy hàng</span>
                        </div>
                        <div className="confirm__checkout--btn">
                            <div></div>
                        </div>
                    </div>
                    <div
                        className={`confirm__checkout--item ${way === 1 && 'active'}`}
                        onClick={() => setWay(1)}
                    >
                        <div className="confirm__checkout--img">
                            <Ship />
                            <span>Giao tận nơi</span>
                        </div>
                        <div className="confirm__checkout--btn">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="confirm__popup--location">
                <Location /> <span>Địa chỉ cửa hàng:</span>
                B26 Tô Vĩnh Diện, Phường 6, Đà Lạt, Lâm Đồng
            </h3>
            <div className="confirm__checkout--user">
                <h4>Thông tin người nhận</h4>
                <p>Bạn cần cung cấp các thông tin sau để chủ tiệm xác minh và giao đúng hàng nhé.</p>
                <Input title="Tên người nhận" />
                <Input title="Số điện thoại" />
                {way === 1 && <Input title="Địa chỉ" />}
            </div>
            <div className="confirm__popup--btn">
                <div className="confirm__popup--text">Xác nhận</div>
            </div>
        </>
    );
};

export default ConfirmPopup;
