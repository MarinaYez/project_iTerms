import React from 'react';
import img1 from '../assets/DetailsConditions1.webp';
import img2 from '../assets/DetailsConditions2.webp';
import img3 from '../assets/DetailsConditions3.webp';
import { useTranslation } from 'react-i18next';
import './DetailsConditions.scss';

const DetailsConditions = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="details_conditions">
        <h2 className="h2_medium">{t('privacy_conditions_conditions')}</h2>
        <h2 className="h2_large">{t('privacy_conditions_explore')}</h2>
        <div className="details_conditions_blocks">
          <div className="details_conditions_blocks_block">
            <img src={img1}></img>
            <div className="details_conditions_blocks_block_text">
              <h3 className="h3_medium">{t('privacy_conditions_made')}</h3>
              <h3 className="h3_large">{t('privacy_conditions_tailor')}</h3>
              <p className="p_medium">{t('privacy_conditions_designed')}</p>
              <p className="p_large">{t('privacy_conditions_safeguard')}</p>
            </div>
          </div>
          <div className="details_conditions_blocks_block">
            <img src={img2}></img>
            <div className="details_conditions_blocks_block_text">
              <h3 className="h3_medium">{t('privacy_conditions_customizable')}</h3>
              <h3 className="h3_large">{t('privacy_conditions_fully')}</h3>
              <p className="p_medium">{t('privacy_conditions_settle')}</p>
              <p className="p_large">{t('privacy_conditions_generic')}</p>
            </div>
          </div>
          <div className="details_conditions_blocks_block">
            <img src={img3}></img>
            <div className="details_conditions_blocks_block_text">
              <h3 className="h3_medium">{t('privacy_conditions_free')}</h3>
              <h3 className="h3_large">{t('privacy_conditions_hosting')}</h3>
              <p className="p_medium">{t('privacy_conditions_termly')}</p>
              <p className="p_large">{t('privacy_conditions_dedicated')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsConditions;