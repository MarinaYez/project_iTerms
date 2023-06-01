import React from 'react';
import { NavLink, useLocation,useNavigate  } from 'react-router-dom';
import data from '../data.json';
import './BlogLayout.scss';
import { useTranslation } from 'react-i18next';

function BlogLayout({ children }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const categories = data.reduce((categories, post) => {
    if (!categories.includes(post.category)) {
      categories.push(post.category);
    }
    return categories;
  }, []);

  const location = useLocation();

  const isActive = (category) => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get('category') === category;
  };

  return (
    <div className="blog_layout">
      <div className="sidebar">
        <h2 onClick={()=>navigate('/blog')}>{t('categories')}</h2>
        <ul className="categories">
          {categories.map((category) => (
            <li key={category}>
              <NavLink
                to={`/blog?category=${category}`} className={isActive(category) ? 'menu_link_active' : 'link_category'}>
                {category} ({data.filter((post) => post.category === category).length})
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default BlogLayout;