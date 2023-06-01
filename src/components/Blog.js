import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import data from '../data.json';
import flag from '../assets/flag.webp';
import iconReadMore from '../assets/icon-read-more.webp';
import 'swiper/swiper-bundle.min.css';
import './Blog.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Grid, Navigation } from 'swiper/core';
import { useTranslation } from 'react-i18next';

function Blog({navigate}) {
  SwiperCore.use([Pagination, Grid, Navigation]);
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  useEffect(() => {
    try {
      setPosts(data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl || null);
  }, [categoryFromUrl]);

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="blog_section">
      <div className="header_for_blog">
        <h4>{t('latest') }</h4>
        <h1>{t('discover_new')}</h1>
        <p>{t('learn_from_experts')}</p>
      </div>
      <BlogLayout navigate={navigate}>
        <div className="blog">
          {isLoading ? (
            <div>{t('loading')}</div>
          ) : error ? (
            <div>{t('error')} {error.message}</div>
          ) : (
            <div className="posts">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                breakpoints={{
                  512: {
                    slidesPerView: 3,
                    slidesPerColumn: 4,
                    spaceBetween: 20,
                    slidesPerGroup: 3,
                    slidesPerColumnFill: 'row',
                    navigation:{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                      bulletClass: 'custom-bullet',
                      dynamicBullets: false,
                      clickable: true,
                      renderBullet: (index, className) => {
                        return '<span class="' + className + ' custom-bullet">' + (index + 1) + '</span>';
                      },
                    },
                    grid: {
                      rows: 4,
                      fill: 'row',
                    },
                  },
                }}
              >
                {filteredPosts.map((post) => (
                  <SwiperSlide key={post.id}>
                    <div className="post" key={post.id}>
                      <img src={flag} alt={post.title} />
                      <h3>{post.title}</h3>
                      <p>{post.prescription}</p>
                      <Link key={post.id} to={`/blog/${post.id}`}>{t('read_more')} <img src={iconReadMore} alt={post.id} /></Link>
                    </div>
                  </SwiperSlide>
                ))}
                <button className="swiper-button-prev"></button>
                <button className="swiper-button-next"></button>
              </Swiper>
            </div>
          )}
        </div>
      </BlogLayout>
    </section>
  );
}

export default Blog;