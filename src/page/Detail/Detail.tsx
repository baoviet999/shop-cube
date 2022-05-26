import { useAppSelector } from 'app/hook';
import { Products, productSelector } from 'page/Home/productSlice';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import DetailBuy from './components/DetailBuy/DetailBuy';
import DetailDescription from './components/DetailDescription/DetailDescription';
import DetailImage from './components/DetailImages/DetailImage';
import DetailInfo from './components/DetailInfo/DetailInfo';
import DetailRelated from './components/DetailRelated/DetailRelated';
import './Detail.scss';

const Detail = () => {
    const { id } = useParams();
    const [product, setproduct] = useState<Products>();
    const productDetail = useAppSelector(productSelector);

    useEffect(() => {
        // callapi here
        const productById = productDetail.find((x) => x.id === Number(id));
        console.log('productById: ', productById);
        setproduct(productById);
    }, [id, productDetail]);
    return (
        <>
            {product && (
                <div className="detail">
                    <DetailImage image={product.img} />
                    <DetailInfo />
                    <DetailDescription />
                    <DetailRelated />
                    <DetailBuy />
                </div>
            )}
        </>
    );
};

export default Detail;
