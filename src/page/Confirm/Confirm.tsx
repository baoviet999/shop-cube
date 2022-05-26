import React, { useState } from 'react';
import ConfirmBtn from './components/ConfirmBtn/ConfirmBtn';
import ConfirmCheckout from './components/ConfirmCheckout/ConfirmCheckout';
import ConfirmHeader from './components/ConfirmHeader/ConfirmHeader';
import ConfirmInfo from './components/ConfirmInfo/ConfirmInfo';
import ConfirmNote from './components/ConfirmNote/ConfirmNote';
import ConfirmProduct from './components/ConfirmProduct/ConfirmProduct';
import ConfirmWay from './components/ConfirmWay/ConfirmWay';
import './Confirm.scss';
const Confirm = () => {
    const [activePopUp, setActivePopup] = useState(false);

    return (
        <div className="confirm">
            <ConfirmHeader />
            <ConfirmProduct />
            <ConfirmCheckout  />
            <ConfirmInfo />
            <ConfirmWay />
            <ConfirmNote />
            <ConfirmBtn />
            
        </div>
    );
};

export default Confirm;
