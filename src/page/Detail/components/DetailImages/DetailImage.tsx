import { detail1 } from 'assets/img';
import { Prev, Share } from 'assets/svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import './DetailImage.scss';

interface DetailImageProps {
    image: any;
}

const DetailImage = ({ image }: DetailImageProps) => {
    const navigate = useNavigate();
    return (
        <div className="detail__images">
            <Swiper
                pagination={true}
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
            >
                {['', '', ''].map((item, indx) => (
                    <SwiperSlide key={indx}>
                        <div
                            className="detail__image"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="detail__header" onClick={() => navigate('/')}>
                <div className="detail__header--icon">
                    <Prev />
                </div>
                <div className="detail__header--icon">
                    <Share />
                </div>
            </div>
        </div>
    );
};

export default DetailImage;
