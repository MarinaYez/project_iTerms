import React, {useState, useEffect} from 'react';
import './Pricing.scss';
import '../scss/style.scss';
import doneGreen from '../assets/assets_prising/done_green.webp';
import lineDone from '../assets/assets_prising/line.webp';
import doneBlue from '../assets/assets_prising/done_blue.webp';
import info from '../assets/assets_prising/inform.webp';
import creditCard from '../assets/assets_prising/credit_card.webp';
import DetailsProtection from './DetailsProtection';
import DetailsBlog from './DetailsBlog';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isActWind, setActWind] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const [activeFeatures, setActiveFeatures] = useState(null);
  const { t } = useTranslation();
  const onToggle = () => setIsToggled(!isToggled);
  const greenInclude = <img src={doneGreen} alt="included" />;
  const blueUninclude = <img src={lineDone} alt="not included" />;
  const blueInclude = <img src={doneBlue} alt="included" />;
  const tablInfo = [
    {
      title: t('content_of_legal'),
      contents: [
        'GDPR, CCPA, CalOPPA',
        t('any_rem_tools'),
        t('any_ads_tools'),
        t('any_analytics_tools'),
        t('any_payment_processors'),
      ],
    },
    { 
      title: t('integrate_to_website'),
      contents: [
        <>
          {t('hosted_policies')} <img src={info} title="Some info" />
        </>,
        <>
          {t('embed_site')} <img src={info} title="Some info" />
        </>,
        <>
          {t('regular_doc_updates')} <img src={info} title="Some info" />
        </>,
      ],
    },
    {
      title: t('customize_&_download'),
      contents: [
        t('TXT'),
        t('HTML'),
        t('DOCX'),
        t('unlimited_downloads'),
        t('custom_logo'),
        t('custom_font'),
      ],
    },
  ];

  const tarifs = [
    {
      desc: t('for_startups'),
      name: 'Pro+',
      price: '1',
      cent: '95',
      period: t('for_month'),
      button: t('choose_plan'),
      activeClass: activeButton === 0 ? 'active_button' : '',
      onClick: () => setActiveButton(0),
      include: [greenInclude, greenInclude, greenInclude, greenInclude, greenInclude, greenInclude, greenInclude, greenInclude, greenInclude, greenInclude, greenInclude, greenInclude, greenInclude, greenInclude],
    },
    {
      desc: t('for_businesses'),
      name: 'Basic',
      price: '0',
      cent: '',
      period: t('for_one_time'),
      button: t('continue_free'),
      activeClass: activeButton === 1 ? 'active_button' : '',
      onClick: () => setActiveButton(1),
      include: [blueInclude, blueInclude, blueInclude, blueInclude, blueInclude, blueUninclude, blueUninclude, blueUninclude, blueInclude, blueUninclude, blueUninclude, blueUninclude, blueUninclude, blueUninclude],
    },
  ];
  let contentGlobalIndex = 0;

  const handleFeaturesClick = (index) => {
    setActiveFeatures(activeFeatures === index ? null : index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="pricing-conteiner">
        <p className="pricing-conteiner__flexible">{t('flexible_pricing')}</p>
        <h1 className="pricing-conteiner__title">{t('simple_pricing')}</h1>
        <p className="pricing-conteiner__no_contracts">{t('noc_nos')}</p>
        <div className="group_swich">
          <p className="group_swich__month">{t('first_month')}</p>
          <div className="swich_box">
            <label className="toggle-switch">
              <input type="checkbox" checked={isToggled} onChange={onToggle} />
              <span className="switch" />
            </label>
          </div>
          <p className="group_swich__month folowing">{t('following_months')}</p>
        </div>
        <div className="pricing-conteiner__most_popular">
          <p>{t('most_popular')}</p>
        </div>
        <div className="table">
          <>
            <div className={`overlay_first${!isActWind ? ' overlay': ''}`}></div>
            <div className={`overlay_sekond${isActWind ? ' overlay': ''}`}></div>
          </>
          <div className="tarifs">
            <>
              <img className="tarifs__credit_card" src={creditCard} alt="Credit card"/>
              <svg className="bottom-svg" width="415" height="98" viewBox="0 0 350 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_789_1)">
                  <ellipse cx="237.055" cy="49.435" rx="281.055" ry="49.2396" fill="url(#paint0_radial_789_1)"/>
                </g>
                <defs>
                  <radialGradient id="paint0_radial_789_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(180.5 45) rotate(90) scale(64.5 461.195)">
                    <stop stopColor="#DEE7F1"/>
                    <stop offset="0.130208" stopColor="#E9F0FA" stopOpacity="0.869792"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </radialGradient>
                  <clipPath id="clip0_789_1">
                    <rect width="390" height="98" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </>
            {tarifs.map((tarif, index) => (
              <div key={index} className={`tarif tarif${index}`}>
                <span className="tarif__desc">{tarif.desc}</span>
                <h2 className={'tarif__name' + (index)}>{tarif.name}</h2>
                <p className="tarif__cost"><sup className="tarif__cur">$</sup>{tarif.price}<sup className="tarif__cur">{tarif.cent}</sup><span className="tarif__period">{tarif.period}</span></p>
                <button
                  className={`tarif__choice ${tarif.activeClass}`}
                  onClick={() => { setActWind(!isActWind); tarif.onClick(); }}>
                  {tarif.button}
                </button>
                <hr></hr>
                <div className="tarif__link_for_table"
                  onClick={() => handleFeaturesClick(index)}>
                  {t('see_all_features')}<span className={activeFeatures === index? ' isOpen': ''}></span>
                </div>
                {activeFeatures === index && (
                  <div className="tarif__table">
                    {tablInfo.map((info, contentIndex) => (
                      <div className="tarif__table_info" key={contentIndex}>
                        <h3 className="tarif__table_title">{info.title}</h3>
                        <ul className="tarif__table_list">
                          {info.contents.map((content, contentIndex) => {
                            contentGlobalIndex++;
                            return (
                              <li className="tarif__table_item" key={contentIndex}>
                                {tarif.include[contentGlobalIndex-1]}
                                {content}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <table className="max_table">
            <tbody>
              {tablInfo.flatMap((infoSection, sectionIndex) => [
                <tr key={`sectionTitle-${sectionIndex}`}><th colSpan={tarifs.length + 1}>{infoSection.title}</th></tr>,
                ...infoSection.contents.map((content, contentIndex) => {
                  const contentRow = tarifs.map((tarif, i) => (
                    <td key={i} className="include">
                      {tarif.include[contentGlobalIndex]}
                    </td>
                  ));
                  contentGlobalIndex += 1;
                  return (
                    <tr key={`content-${sectionIndex}-${contentIndex}`}>
                      <td className="context">{content}</td>
                      {contentRow}
                    </tr>
                  );
                }),
              ])}
            </tbody>
          </table>
        </div>
      </div>
      <DetailsProtection />
      <DetailsBlog/>
    </>
  );
};

export default Pricing;
