import Card from 'components/common/Card/Card';
import Footer from 'components/layout/Footer/Footer';
import Hero from 'components/layout/Hero/Hero';
import Nav from 'components/layout/Nav/Nav';
import Products from 'components/layout/Products/Products';
import ProductsList from 'components/layout/ProductsList/ProductsList';
import ShopInfo from 'components/layout/ShopInfo/ShopInfo';
import React from 'react';
import Header from '../../components/layout/Header/Header';
import './Home.scss';
const Home = () => {
    
    return (
        <div className="home">
            <Header />
            <Hero />
            <ShopInfo />
            <Products />
            <ProductsList />
            <Footer />
            <Nav />
            <Card />
        </div>
    );
};

export default Home;
