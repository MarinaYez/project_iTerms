import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import googleTabl from '../assets/Google_tablet.webp';
import facebookTabl from '../assets/Facebook-blog.webp';
import './SignIn.scss';
import { useTranslation } from 'react-i18next';

const SignIn = ({ onSignIn, navigate }) => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let emailFound = false;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key === email) {
        emailFound = true;
        break;
      }
    }
    if (emailFound) {
      onSignIn(email);
      navigate('/');
    } else {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sign_in_container">
      {showPopup && (
        <div className="popup">
          <p>{t('popup_create')}<br/>{t('popup_incorrect')}</p>
        </div>
      )}
      <div className="form_container">
        <div className="form_details">
          <h2>{t('sign_in')}</h2>
          <p className="or">{t('or')}</p>
          <form>
            <label htmlFor="email">{t('email')}</label>
            <input type="email" id="email" placeholder={t('enter_email')} value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="password">{t('password')}</label>
            <input type="password" id="password" placeholder={t('enter_password')} />
          </form>

          <button id = "sign_in" onClick={handleSubmit}>{t('sign_in')}</button>

          <div className="sign_in_with">
            <h3>{t('sign_in_with')}</h3>
            <div className="sign_in_with_but">
              <button><img className="for_tab_sign_in" src={googleTabl}  />Google</button>
              <button><img className="for_tab_sign_in" src={facebookTabl} />Facebook</button>
            </div>
          </div>

          <p className="link_text_for_log_in">
            {t('have_not_account')} <Link to={'/sign_up'}>{t('sign_up')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
