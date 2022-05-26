import { Pick, Ship } from 'assets/svg';
import Popup from 'components/layout/PopupFilter/PopupFilter';
import React, { useState } from 'react';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';
import './ConfirmCheckout.scss';
interface ConfirmCheckoutProps {
    // setActivePopup: (active: boolean) => void;
}

const ConfirmCheckout = ({}: ConfirmCheckoutProps) => {
    const [activePopUp, setActivePopup] = useState(false);
    const [way, setWay] = useState(0);
    const handleOpenPopup = (number: number) => {
        setActivePopup(true);
        setWay(number);
    };
    return (
        <>
            <div className="confirm__checkout">
                <h4>
                    Hình thức nhận hàng <span>*</span>
                </h4>
                <div className={`confirm__checkout--list`}>
                    <div
                        className={`confirm__checkout--item ${way === 0 && 'active'}`}
                        onClick={() => handleOpenPopup(0)}
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
                        onClick={() => handleOpenPopup(1)}
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
            <Popup active={activePopUp} setOpenPopup={setActivePopup}>
                <ConfirmPopup way={way} setWay={setWay} />
            </Popup>
        </>
    );
};

export default ConfirmCheckout;
