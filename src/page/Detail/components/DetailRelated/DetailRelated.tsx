import { product1 } from 'assets/img';
import { Next, Plus } from 'assets/svg';
import React from 'react';
import './DetailRelated.scss';
const DetailRelated = () => {
    return (
        <div className="detail__related">
            <div className="detail__related--header">
                <h4>Sản phẩm liên quan</h4>
                <div>
                    <span>Xem tất cả</span> <Next />
                </div>
            </div>
            <div className="detail__related--list">
                <div className="grid">
                    <div className="row">
                        <div className="col c-8">
                            <div className="detail__related--item">
                                <img src={product1} alt="" />
                                <div className="detail__related--info">
                                    <h4>Sen đá pro</h4>
                                    <div>
                                        <span>100,000đ</span>
                                        <Plus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailRelated;
