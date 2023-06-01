import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import './SwiperPost.scss';
import { useTranslation } from 'react-i18next';
import Review from '../../assets/assets_generate/Review.webp';

  

function SwiperPost() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  const renderStars = (rating, userId) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? 'star filled' : 'star';
      stars.push(<span key={i} 
        className={starClass}
        onClick={() => handleStarClick(userId, i)}
      >&#9733;</span>);
    }
    return stars;
  };
  
  useEffect(() => {
    fetch('https://run.mocky.io/v3/225376f1-9091-4d10-a0c2-584663e82e42')
      .then(res => res.json())
      .then(data =>{
        const usersData = data.users;
        setUsers(usersData);
      })
      .catch(error => {
        throw new Error('Error uploading data.json', error);
      });
  }, []);
  
  const handleStarClick = (userId, value) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === userId) {
          return { ...user, rating: value };
        }
        return user;
      });
    });
  };

  return (
    <section className="section_swiper">
      <div className="swiperPost_title">
        <div className="swiperPost_title_image" style={{backgroundImage:`url(${Review})`}}></div>
        <h5 className="h5_postlarge">{t('swiperPost_title-h5')}</h5>
        <div className="description">
          <h2 className="h2_postlarge">{t('swiperPost_title-h2')}</h2>
          <p className="p_postlarge">{t('swiperPost_title-p')} <span>{t('swiperPost_title-span')}</span></p>
        </div>
      </div>
      <div className="swiperPost_background">
        <div className="swiperPost_body">
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
            {users.map(user => (
              <SwiperSlide className="swiper_slidePost" key={user.id}>
                <div className="swiper_slide_main">
                  <div className="swiper_slide_image">
                    <img src={user.image} alt="Privacy Policy" />
                  </div>
                  <div className="swiper_slide_posts">
                    <h5>{user.name}</h5>
                    <p>{user.status}</p>
                  </div>
                </div>
                <div className="swiper_slide_post">
                  <h4>{user.review}</h4>
                  <div>
                    <div className="stars">
                      {renderStars(user.rating, user.id)}
                      <p>{user.rating}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SwiperPost;
