import { useAppDispatch, useAppSelector } from 'app/hook';
import { AllList, Filter, List } from 'assets/svg';
import { Products, productSelector } from 'page/Home/productSlice';
import React, { useEffect, useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import Popup from '../PopupFilter/PopupFilter';
import ProductItem from '../ProductItem/ProductItem';
import './ProductsList.scss';

const FILTER_LIST = [
    {
        name: 'Mới nhất',
        id: 1,
    },
    {
        name: 'Sản phẩm bán chạy',
        id: 2,
    },
    {
        name: 'Sản phẩm khuyến mãi',
        id: 3,
    },
    {
        name: 'Giá từ cao đến thấp',
        id: 4,
    },
    {
        name: 'Giá từ thấp đến cao',
        id: 5,
    },
];

const ProductsList = () => {
    const [grid, setGrid] = useState<boolean>(false);
    const [filter, setFilter] = useState<number>(1);
    const [openPopup, setOpenPopup] = useState<boolean>(false);

    const handleActiveFilter = (indx: number) => {
        return indx + 1 === filter ? true : false;
    };

    const [productsList, setPoductList] = useState<Products[]>([]);
    const dispatch = useAppDispatch();
    
    const products = useAppSelector(productSelector);

    useEffect(() => {
        setPoductList(products);
    }, [products, dispatch]);

    return (
        <div className="product-list">
            <div className="product-list__header">
                <h4>Tất cả sản phẩm{`(${productsList.length})`}</h4>
                <div className="product-list__filter">
                    <div className="product-list__filter--list">
                        <div
                            className={`product-list__filter--item ${!grid && 'active'}`}
                            onClick={() => setGrid(false)}
                        >
                            <List />
                        </div>
                        <div
                            className={`product-list__filter--item ${grid && 'active'}`}
                            onClick={() => setGrid(true)}
                        >
                            <AllList />
                        </div>
                    </div>
                    <div className="product-list__option" onClick={() => setOpenPopup(true)}>
                        <Filter />
                    </div>
                </div>
            </div>
            <div className={`product-list__items ${grid ? 'active' : ''}`}>
                <div className="grid">
                    <div className="row">
                        {productsList.map((product, indx) => (
                            <div key={indx} className={`col c-${grid ? '6' : '12'}`}>
                                <ProductItem product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="product-list__end">
                <span>Đã hiển thị sản phẩm cuối cùng trong danh sách</span>
            </div>
            <Popup active={openPopup} setOpenPopup={setOpenPopup}>
                <div className="product__filter">
                    {FILTER_LIST.map((filter, indx) => (
                        <FilterItem
                            filter={filter}
                            key={indx}
                            active={handleActiveFilter(indx)}
                            setFilter={setFilter}
                        />
                    ))}
                </div>
            </Popup>
        </div>
    );
};

export default ProductsList;
