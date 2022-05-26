import React from 'react';

const ProductsCard = () => {
    return (
        <div className="products__card">
            <img
                src="https://d3hr4eej8cfgwy.cloudfront.net/v2/320x190/finan-prd/dba472b8-1dc6-4327-bf64-3d268543390a/image/6b1e7af5-0350-493e-9c48-078c2fc4f0b1.jpg"
                alt=""
            />
            <div className="products__card--content">
                <h3>Sen đá</h3>
                <span>(3)</span>
            </div>
        </div>
    );
};

export default ProductsCard;
