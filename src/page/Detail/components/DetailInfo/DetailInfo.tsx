import { avt, detail1, product1 } from 'assets/img';
import { Chau, HasSale, Note, Plus, Tag } from 'assets/svg';
import Popup from 'components/layout/PopupFilter/PopupFilter';
import { HEADER_ICON } from 'components/layout/ShopInfo/ShopInfo';
import React, { useState } from 'react';
import './DetailInfo.scss';

const PRODUCT_TAG = [
    {
        name: 'Con cá to',
        id: 1,
        img: detail1,
    },
    {
        name: 'Con cá bé',
        id: 2,
        img: avt,
    },
];

const DetailInfo = () => {
    const [active, setActive] = useState(false);
    const [selectProduct, setSelectProduct] = useState(0);
    const [selectImage, setSelectImage] = useState<null | string>();
    const handleSelectproduct = (id: number, img: string) => {
        setSelectProduct(id);
        setSelectImage(img);
    };

    const handleChangeImage = (img: string) => {
        setSelectImage(img);
    };
    return (
        <>
            <div className="detail__info">
                <div className="detail__info--header">
                    <span>Sen đá</span>
                    <div className="shop-info__header--contact">
                        {HEADER_ICON.map((icon, indx) => (
                            <a
                                key={indx}
                                href={icon.link}
                                className="shop-info__header--icon"
                                style={{ background: `${icon.color}` }}
                            >
                                {icon.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="detail__info--name">
                    <h1>Sen đá 4 cây</h1>
                    <div className="product-item__status">
                        <div className="product-item__status--item">
                            <HasSale />
                            <span> Đã bán +1</span>
                        </div>
                        <div className="product-item__status--item">
                            <Chau /> <span>Chậu</span>
                        </div>
                    </div>

                    <div className="product-item__price detail__info--price">
                        <span>75,000đ</span>
                        <Plus onClick={() => setActive(true)} />
                    </div>
                </div>
            </div>
            <Popup active={active} setOpenPopup={setActive}>
                <div className="product__filter">
                    <div className="product__img">
                        <img src={selectImage ? selectImage : product1} alt="" />
                        <div className="product__price">
                            <span>100,000đ</span>
                            <div>
                                <Note />
                                <span>Ghi chú...</span>
                            </div>
                        </div>
                    </div>
                    <div className="product__variant">
                        <h4>Phân loại</h4>
                        <div className="product__variant--items">
                            {PRODUCT_TAG.map((tag, indx) => (
                                <div
                                    className={`product__variant--item ${
                                        tag.id === selectProduct && 'active'
                                    }`}
                                    onClick={() => handleSelectproduct(tag.id, tag.img)}
                                    onMouseEnter={() => handleChangeImage(tag.img)}
                                    onMouseLeave={() => setSelectImage(null)}
                                >
                                    {tag.name}
                                    <Tag />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="product__btns">
                        <div className={`product__btn ${selectProduct !== 0 && 'active'}`}>Thêm vào giỏ</div>
                        <div className={`product__btn ${selectProduct !== 0 && 'active'}`}>Mua ngay</div>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default DetailInfo;
