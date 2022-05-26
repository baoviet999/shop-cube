import { useAppDispatch } from 'app/hook';
import { Chau, HasSale, Minus, Plus } from 'assets/svg';
import { productAction, Products } from 'page/Home/productSlice';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductItem.scss';

interface ProductItemProp {
    product: Products;
}

const ProductItem = ({ product }: ProductItemProp) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleAddToCard = () => {
        dispatch(productAction.addToCard(product));
    };

    return (
        <div className="product-item">
            <img src={product.img} alt="" onClick={() => navigate(`detail/${product.id}`)} />
            <div className="product-item__content">
                <h4 onClick={() => navigate(`detail/${product.id}`)}>{product.name}</h4>
                <span>{product.desc}</span>
                <div className="product-item__status">
                    <div className="product-item__status--item">
                        <HasSale />
                        <span> Đã bán +{`${product.hasSale}`} </span>
                    </div>
                    <div className="product-item__status--item">
                        <Chau /> <span>Chậu</span>
                    </div>
                </div>
                <div className="product-item__price">
                    <span>{`${product.price}`}đ</span>
                    <div className="product-item__count">
                        {product.count > 0 && (
                            <Minus style={{ color: '#7f7f7f' }} />
                        )}
                        {product.count > 0 && (
                            <input
                                type="number"
                                inputMode="decimal"
                                value={product.count}
                            />
                        )}
                        <Plus color="#16884a" onClick={handleAddToCard} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
