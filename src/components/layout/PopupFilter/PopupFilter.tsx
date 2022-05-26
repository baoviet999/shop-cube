import { Close } from 'assets/svg';
import React, { ReactNode } from 'react';
import './PopupFilter.scss';

interface PopupProps {
    children?: ReactNode;
    active: boolean;
    setOpenPopup: (active: boolean) => void;
}
const Popup = ({ children, active, setOpenPopup }: PopupProps) => {
    return (
        <div className={`popup ${active ? 'active' : ''}`}>
            <div className="popup__inner">
                <div className="popup__header">
                    <h1>Xem theo</h1>
                    <div className="popup__close" onClick={() => setOpenPopup(false)}>
                        <Close />
                    </div>
                </div>
                <div className="popup__content">{children}</div>
            </div>
        </div>
    );
};

export default Popup;
