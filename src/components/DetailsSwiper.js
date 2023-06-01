import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/Privacy-Policy.webp';
import img2 from '../assets/Terms-_-Conditions_1.webp';
import img3 from '../assets/Cookie_1.webp';
import img4 from '../assets/Eula_1.webp';
import img5 from '../assets/Disclaimer.webp';
import img6 from '../assets/Refund-Policy.webp';
import 'swiper/swiper-bundle.min.css';
import './DetailsSwiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DetailsSwiper = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="swiper_title">
        <h5 className="h5_medium">{t('privacy_swiper_business')}</h5>
        <h5 className="h5_large">{t('privacy_swiper_made')}</h5>
        <h2 className="h2_medium">{t('privacy_swiper_full')}</h2>
        <h2 className="h2_large">{t('privacy_swiper_explore')}</h2>
        <p className="p_medium">{t('privacy_swiper_create')}</p>
        <p className="p_large">{t('privacy_swiper_regardless')}</p>
      </div>
      <div className="swiper_background">
        <div className="swiper_body">
          <div className="swiper-button">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <Swiper
            className="swiper"
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            <SwiperSlide className="swiper_slide"><div>
              <img src={img1}></img>
              <h5>{t('privacy_swiper_privacy')}</h5>
              <p>{t('privacy_swiper_statement')}</p>
              <Link to="/" className="generate">{t('privacy_swiper_generate')}</Link>
              <Link to="/pricing" className="learn_more">{t('privacy_swiper_learn')}</Link>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={img2}></img>
              <h5>{t('privacy_swiper_terms')}</h5>
              <p>{t('privacy_swiper_legal')}</p>
              <Link to="/" className="generate">{t('privacy_swiper_generate')}</Link>
              <Link to="/pricing" className="learn_more">{t('privacy_swiper_learn')}</Link>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={img3}></img>
              <h5>{t('privacy_swiper_cookie')}</h5>
              <p>{t('privacy_swiper_legal')}</p>
              <Link to="/" className="generate">{t('privacy_swiper_generate')}</Link>
              <Link to="/pricing" className="learn_more">{t('privacy_swiper_learn')}</Link>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={img4}></img>
              <h5>Eula</h5>
              <p>{t('privacy_swiper_legal')}</p>
              <Link to="/" className="generate">{t('privacy_swiper_generate')}</Link>
              <Link to="/pricing" className="learn_more">{t('privacy_swiper_learn')}</Link>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={img5}></img>
              <h5>{t('privacy_swiper_disclaimer')}</h5>
              <p>{t('privacy_swiper_legal')}</p>
              <Link to="/" className="generate">{t('privacy_swiper_generate')}</Link>
              <Link to="/pricing" className="learn_more">{t('privacy_swiper_learn')}</Link>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={img6}></img>
              <h5>{t('privacy_swiper_refund')}</h5>
              <p>{t('privacy_swiper_legal')}</p>
              <Link to="/" className="generate">{t('privacy_swiper_generate')}</Link>
              <Link to="/pricing" className="learn_more">{t('privacy_swiper_learn')}</Link>
            </div></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};


export default DetailsSwiper;