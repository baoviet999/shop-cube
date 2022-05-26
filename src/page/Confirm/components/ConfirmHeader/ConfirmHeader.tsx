import { Prev } from 'assets/svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmHeader.scss';
const ConfirmHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="confirm__header">
            <h1>Xác nhận đơn hàng</h1>
            <Prev onClick={() => navigate(`/`)} />
        </div>
    );
};

export default ConfirmHeader;
