import React from 'react';
import done from '../assets/Done.webp';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './DetailsOnline.scss';

const DetailsOnline = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="details_online">
        <h2 className="h2_medium">{t('privacy_online_best')}</h2>
        <h2 className="h2_large">{t('privacy_online_online')}</h2>
        <div className="details_online_blocks">
          <div className="details_online_blocks_block">
            <h3 className="h3_medium">{t('privacy_online_about')}</h3>
            <h3 className="h3_large">{t('privacy_online_numerous')}</h3>
            <p className="p_medium">{t('privacy_online_create')}</p>
            <p className="p_large">{t('privacy_online_regardless')}</p>
            <ul>
              <li><img src={done}></img>{t('privacy_online_blog')}</li>
              <li><img src={done}></img>{t('privacy_online_website')}</li>
              <li><img src={done}></img>{t('privacy_online_mobile')}</li>
              <li><img src={done}></img>{t('privacy_online_ecommerce')}</li>
              <li><img src={done}></img>{t('privacy_online_shop')}</li>
              <li><img src={done}></img>SaaS</li>
            </ul>
            <p>{t('privacy_online_trusted')}</p>
          </div>
          <div className="details_online_blocks_block">
            <h3 className="h3_medium">{t('privacy_online_protect')}</h3>
            <h3 className="h3_large">{t('privacy_online_safeguard')}</h3>
            <p className="p_medium">{t('privacy_online_take')}</p>
            <p className="p_large">{t('privacy_online_operate')}</p>
            <ul>
              <li><img src={done}></img>{t('privacy_online_terms')}</li>
              <li><img src={done}></img>{t('privacy_online_intellectual')}</li>
              <li><img src={done}></img>{t('privacy_online_digital')}</li>
              <li><img src={done}></img>{t('privacy_online_prohibited')}</li>
              <li><img src={done}></img>{t('privacy_online_termination')}</li>
              <li><img src={done}></img>{t('privacy_online_governing')}</li>
            </ul>
            <p className="p_medium">{t('privacy_online_conditions')}</p>
            <p className="p_large">{t('privacy_online_protected')}</p>
          </div>
        </div>
        <Link to="/" className="header_button_details_1">{t('privacy_online_generate')}</Link>
      </div>
    </>
  );
};

export default DetailsOnline;