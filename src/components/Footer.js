import React, {useState, useEffect} from 'react';
import './Footer.scss';
import smallBackground from '../assets/assets_footer/small-footer-background.webp';
import mediumBackground from '../assets/assets_footer/medium-footer-background.webp';
import largeBackground from '../assets/assets_footer/large-footer-background.webp';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [background, setBackground] = useState('');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }; 
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBackground(smallBackground);
      } else if (width < 1920) {
        setBackground(mediumBackground);
      } else {
        setBackground(largeBackground);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  return (
    <>
      <div className="footer_background" style={{backgroundImage: `url(${background})`}}>
        <div className="footer_block">
          <h4 className="h4_medium">{t('article_medium')}</h4>
          <h4 className="h4_large">{t('article_large')}</h4>
          <h1 className="h1_medium">{t('business_medium')}</h1>
          <h1 className="h1_large">{t('business_large')}</h1>
          <p className="p_medium">{t('text_medium')}</p>
          <p className="p_large">{t('text_large')}</p>
          <div className="footer_button_details">
            <Link to="/sign_up" className="footer_button_sign">{t('footer_sign')}</Link>
            <Link to="/sign_up" className="footer_button_start">{t('footer_start')}</Link>
            <Link to="/pricing" className="footer_button_learn">{t('footer_learn')}</Link>
          </div>
        </div>
        <div className="footer_nav">
          <div className="footer_nav_block">
            <div className="footer_nav_section">
              <p className="footer_nav_title">iTerms</p>
              <p className="p_nav_large">{t('footer_text')}</p>
              <ul className="footer_nav_list">
                <li>{t('footer_terms')}</li>
                <li>{t('footer_policy')}</li>
                <li>{t('footer_disclaimer')}</li>
                <li onClick={() => setShowLanguageOptions(!showLanguageOptions)}>{t('footer_version')}
                  <span className={showLanguageOptions ? 'isOpen' : ''}></span>
                </li>
                {showLanguageOptions && (
                  <>
                    <li onClick={() => changeLanguage('en')}>En</li>
                    <li onClick={() => changeLanguage('ua')}>Ua</li>
                  </>
                )}
              </ul>
            </div>
            <div className="footer_nav_section">
              <p>{t('footer_company')}</p>
              <ul>
                <li>{t('footer_work')}</li>
                <li>{t('footer_reviews')}</li>
                <li>{t('footer_contact')}</li>
                <Link to="/blog"><li>{t('footer_blog')}</li></Link>
              </ul>
            </div>
          </div>
          <div className="footer_nav_block">
            <div className="footer_nav_section">
              <p>{t('footer_products')}</p>
              <ul>
                <li>{t('footer_solutions')}</li>
                <Link to="/policy"><li>{t('footer_trust')}</li></Link>
                <li>{t('footer_payment')}</li>
                <li>{t('footer_help')}</li>
              </ul>
            </div>
            <div className="footer_nav_section">
              <p>{t('footer_support')}</p>
              <ul>
                <li>{t('footer_help')}</li>
                <Link to="/pricing"><li>{t('footer_pricing')}</li></Link>
                <li>{t('footer_payment')}</li>
                <li>{t('footer_help')}</li>
              </ul>
            </div>
          </div>
        </div>
        <span className="footer_line"></span>
        <p className="footer_copyright">© 2021 Terms Inc. All rights reserved</p>
        <div className="div_large">
          <p>© 2021 Terms Inc. All rights reserved</p>
          <ul>
            <li>{t('footer_terms')}</li>
            <li>{t('footer_policy')}</li>
            <li>{t('footer_disclaimer')}</li>
            <li onClick={() => setShowLanguageOptions(!showLanguageOptions)}>{t('footer_version')}
              <span className={showLanguageOptions ? 'isOpen' : ''}></span>
            </li>
            {showLanguageOptions && (
              <div>
                <li onClick={() => changeLanguage('en')}>En</li>
                <li onClick={() => changeLanguage('ua')}>Ua</li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>);
};
  
export default Footer;