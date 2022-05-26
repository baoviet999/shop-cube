import { useAppDispatch, useAppSelector } from 'app/hook';
import { product1 } from 'assets/img';
import { Drop, Minus, Note, Plus } from 'assets/svg';
import { cardSelector, productAction, Products } from 'page/Home/productSlice';
import React, { useState } from 'react';
import './ConfirmProduct.scss';
const ConfirmProduct = () => {
    const [more, setMore] = useState(1);
    const products = ['', '', ''];
    const productData = products.slice(0, more);

    const dispatch = useAppDispatch();
    const card = useAppSelector(cardSelector);
    const handleAddToCard = (product: Products) => {
        dispatch(productAction.addToCard(product));
    };
    return (
        <div className="confirm__products">
            <h4>Thông tin sản phẩm</h4>
            {card.map((product, indx) => (
                <div className="confirm__product" key={indx}>
                    <div className="confirm__product--info">
                        <img src={product1} alt="" />
                        <div className="confirm__product--name">
                            <h3>{product.name}</h3>
                            <div className="product__price">
                                <div>
                                    <Note />
                                    <span>Ghi chú...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="confirm__price">
                        <span>{`${product.price * product.count}`}đ</span>
                        <span>Chậu</span>
                        <div className="product-item__count">
                            {product.count > 0 && <Minus style={{ color: '#7f7f7f' }} />}
                            {product.count > 0 && (
                                <input type="number" inputMode="decimal" value={product.count} />
                            )}
                            <Plus color="#16884a" onClick={() => handleAddToCard(product)} />
                        </div>
                    </div>
                </div>
            ))}
            <div
                className="confirm__loadmore"
                onClick={() => setMore((prev) => (prev === 1 ? products.length : 1))}
            >
                <span>{more === 1 ? 'Xem thêm' : 'Thu gọn'}</span>
                <Drop />
            </div>
        </div>
    );
};

export default ConfirmProduct;
