import React, { useState } from 'react';
import './DetailsBlog.scss';
import { useTranslation } from 'react-i18next';

function ExpandingInfo({ title, p1, h51, p2, h52, p3}) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="details_blog">
      <h6 className={isOpen ? 'isOpen' : ''} onClick={() => setIsOpen(!isOpen)}>
        {t(title)}
        <span></span>
      </h6>
      {isOpen && (
        <div>
          <p className="details_blog_text">{t(p1)}</p>
          <h2 className="details_blog_subtitle">{t(h51)}</h2>
          <p className="details_blog_text">{t(p2)}</p>
          <h2 className="details_blog_subtitle">{t(h52)}</h2>
          <p className="details_blog_text">{t(p3)}</p>
        </div>
      )}
    </div>
  );
}

function DetailsBlog() {
  const data = [
    {
      title: 'What is a Privacy Policy?',
      p1: 'There are two main reasons why you need a Privacy Policy:',
      h51: 'They\'re legally required',
      p2: 'If you collect or use personal information, you\'ll have to comply with privacy laws put in place around the world to protect consumer privacy. These laws will apply regardless of where your business itself is located, as they work to protect consumers in specific regions. For example, if your business is located in the U.S. but you have users in the EU, the EU\'s GDPR will still apply to you.',
      h52: 'Consumers expect to see them',
      p3: 'In a world where consumer privacy is more important than ever and consumers are starting to take their privacy more seriously, not having a Privacy Policy can mean you may lose customers. People expect to see a Privacy Policy that they can easily access whenever they want. Not having one will make you seem untrustworthy.',
    },
    {
      title: 'What is Personal Information?',
      p1: 'There are two main reasons why you need a Privacy Policy:',
      h51: 'They\'re legally required',
      p2: 'If you collect or use personal information, you\'ll have to comply with privacy laws put in place around the world to protect consumer privacy. These laws will apply regardless of where your business itself is located, as they work to protect consumers in specific regions. For example, if your business is located in the U.S. but you have users in the EU, the EU\'s GDPR will still apply to you.',
      h52: 'Consumers expect to see them',
      p3: 'In a world where consumer privacy is more important than ever and consumers are starting to take their privacy more seriously, not having a Privacy Policy can mean you may lose customers. People expect to see a Privacy Policy that they can easily access whenever they want. Not having one will make you seem untrustworthy.',
    },
    {
      title: 'Why do I need a Privacy Policy?',
      p1: 'There are two main reasons why you need a Privacy Policy:',
      h51: 'They\'re legally required',
      p2: 'If you collect or use personal information, you\'ll have to comply with privacy laws put in place around the world to protect consumer privacy. These laws will apply regardless of where your business itself is located, as they work to protect consumers in specific regions. For example, if your business is located in the U.S. but you have users in the EU, the EU\'s GDPR will still apply to you.',
      h52: 'Consumers expect to see them',
      p3: 'In a world where consumer privacy is more important than ever and consumers are starting to take their privacy more seriously, not having a Privacy Policy can mean you may lose customers. People expect to see a Privacy Policy that they can easily access whenever they want. Not having one will make you seem untrustworthy.',
    },
    {
      title: 'Can I request an email address without a Privacy Policy?',
      p1: 'There are two main reasons why you need a Privacy Policy:',
      h51: 'They\'re legally required',
      p2: 'If you collect or use personal information, you\'ll have to comply with privacy laws put in place around the world to protect consumer privacy. These laws will apply regardless of where your business itself is located, as they work to protect consumers in specific regions. For example, if your business is located in the U.S. but you have users in the EU, the EU\'s GDPR will still apply to you.',
      h52: 'Consumers expect to see them',
      p3: 'In a world where consumer privacy is more important than ever and consumers are starting to take their privacy more seriously, not having a Privacy Policy can mean you may lose customers. People expect to see a Privacy Policy that they can easily access whenever they want. Not having one will make you seem untrustworthy.',
    },
    {
      title: 'How should I write my Privacy Policy?',
      p1: 'There are two main reasons why you need a Privacy Policy:',
      h51: 'They\'re legally required',
      p2: 'If you collect or use personal information, you\'ll have to comply with privacy laws put in place around the world to protect consumer privacy. These laws will apply regardless of where your business itself is located, as they work to protect consumers in specific regions. For example, if your business is located in the U.S. but you have users in the EU, the EU\'s GDPR will still apply to you.',
      h52: 'Consumers expect to see them',
      p3: 'In a world where consumer privacy is more important than ever and consumers are starting to take their privacy more seriously, not having a Privacy Policy can mean you may lose customers. People expect to see a Privacy Policy that they can easily access whenever they want. Not having one will make you seem untrustworthy.',
    },
  ];
  const [isOpenGeneral, setIsOpenGeneral] = useState(false);
  const [isOpenTrust, setIsOpenTrust] = useState(false);
  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [isOpenContacts, setIsOpenContacts] = useState(false);

  const toggleOpenGeneral = () => {
    setIsOpenGeneral(!isOpenGeneral);
    setIsOpenTrust(false);
    setIsOpenPayment(false);
    setIsOpenHelp(false);
    setIsOpenContacts(false);
  };

  const toggleOpenTrust = () => {
    setIsOpenTrust(!isOpenTrust);
    setIsOpenGeneral(false);
    setIsOpenPayment(false);
    setIsOpenHelp(false);
    setIsOpenContacts(false);
  };

  const toggleOpenPayment = () => {
    setIsOpenPayment(!isOpenPayment);
    setIsOpenGeneral(false);
    setIsOpenTrust(false);
    setIsOpenHelp(false);
    setIsOpenContacts(false);
  };

  const toggleOpenHelp = () => {
    setIsOpenHelp(!isOpenHelp);
    setIsOpenGeneral(false);
    setIsOpenTrust(false);
    setIsOpenPayment(false);
    setIsOpenContacts(false);
  };

  const toggleOpenContacts = () => {
    setIsOpenContacts(!isOpenContacts);
    setIsOpenGeneral(false);
    setIsOpenTrust(false);
    setIsOpenHelp(false);
    setIsOpenPayment(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const { t } = useTranslation();
  const activeClass = (isOpen, className) => isOpen ? `${className} active` : className;
  return (
    <div className="details_blog_header">
      <h3 className="h3_medium">{t('privacy_blog_blog')}</h3>
      <h3 className="h3_large">{t('privacy_blog_solutions')}</h3>
      <h2 className="h2_medium">{t('privacy_blog_questions')}</h2>
      <h2 className="h2_large">{t('privacy_blog_do')}</h2>
      <p className="p_medium">{t('privacy_blog_more')}</p>
      <p className="p_large">{t('privacy_blog_take')}</p>
      <div className="block_medium">
        <h6>{t('privacy_blog_table')}</h6>
        <h5 onClick={toggleOpen}>{t('privacy_blog_general')}<span className={isOpen ? 'isOpen' : ''}></span></h5>
        {isOpen && data.map((item, index) => (
          <ExpandingInfo key={index} title={item.title} p1={item.p1} h51={item.h51} p2={item.p2} h52={item.h52} p3={item.p3} />
        ))}
      </div>
      <div className="flex_large">
        <div className="block_large">
          <h6>{t('privacy_blog_table')}</h6>
          <h5 className={activeClass(isOpenGeneral, 'general')} onClick={toggleOpenGeneral}>{t('privacy_blog_general')}</h5>
          <h5 className={activeClass(isOpenTrust, 'trust')} onClick={toggleOpenTrust}>{t('privacy_blog_trust')}</h5>
          <h5 className={activeClass(isOpenPayment, 'payment')} onClick={toggleOpenPayment}>{t('privacy_blog_payment')}</h5>
          <h5 className={activeClass(isOpenHelp, 'help')} onClick={toggleOpenHelp}>{t('privacy_blog_help')}</h5>
          <h5 className={activeClass(isOpenContacts, 'contacts')} onClick={toggleOpenContacts}>{t('privacy_blog_contacts')}</h5>
        </div>
        <div>
          {isOpenGeneral && data.map((item, index) => (
            <ExpandingInfo key={index} title={item.title} p1={item.p1} h51={item.h51} p2={item.p2} h52={item.h52} p3={item.p3} />
          ))}
          {isOpenTrust && data.map((item, index) => (
            <ExpandingInfo key={index} title={item.title} p1={item.p1} h51={item.h51} p2={item.p2} h52={item.h52} p3={item.p3} />
          ))}
          {isOpenPayment && data.map((item, index) => (
            <ExpandingInfo key={index} title={item.title} p1={item.p1} h51={item.h51} p2={item.p2} h52={item.h52} p3={item.p3} />
          ))}
          {isOpenHelp && data.map((item, index) => (
            <ExpandingInfo key={index} title={item.title} p1={item.p1} h51={item.h51} p2={item.p2} h52={item.h52} p3={item.p3} />
          ))}
          {isOpenContacts && data.map((item, index) => (
            <ExpandingInfo key={index} title={item.title} p1={item.p1} h51={item.h51} p2={item.p2} h52={item.h52} p3={item.p3} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsBlog;

