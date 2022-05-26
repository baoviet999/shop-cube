import React from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';
import './Products.scss';
const Products = () => {
    return (
        <div className="products">
            <div className="products__inner">
                <ProductsCard />
                {/* <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard /> */}
            </div>
        </div>
    );
};

export default Products;
