import React, { useState, useEffect } from 'react';
import './DetailsProtection.scss';
import smallBackground from '../assets/small-background.webp';
import mediumBackground from '../assets/medium-background.webp';
import largeBackground from '../assets/large-background.webp';
import img1 from '../assets/TermsConditions.webp';
import img2 from '../assets/Businesses.webp';
import img3 from '../assets/CompliantPageviews.webp';
import { useTranslation } from 'react-i18next';

const DetailsProtection = () => {
  const { t } = useTranslation();
  const [background, setBackground] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBackground(smallBackground);
      } 
      if (width < 1920) {
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
  return (
    <>
      <div className="details_protection_background" style={{ backgroundImage: `url(${background})` }}>
        <div className="text_block">
          <h5 className="h5_medium">{t('privacy_protection_trust')}</h5>
          <h5 className="h5_large">{t('privacy_protection_provisions')}</h5>
          <h2 className="h2_medium">{t('privacy_protection_legal')}</h2>
          <h2 className="h2_large">{t('privacy_protection_secure')}</h2>
          <p className="p_medium">{t('privacy_protection_create')}</p>
          <p className="p_large">{t('privacy_protection_attorney')}</p>
          <div className="details_protection_flex">
            <div>
              <img src={img1}></img>
              <h2>100,000+</h2>
              <p>{t('privacy_protection_policies')}</p>
            </div>
            <div>
              <img src={img2}></img>
              <h2>140,000+</h2>
              <p>{t('privacy_protection_businesses')}</p>
            </div>
            <div>
              <img src={img3}></img>
              <h2>60 Million+</h2>
              <p>{t('privacy_protection_compliant')}</p>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
};

export default DetailsProtection;