import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import googleimg from '../assets/Google.webp';
import googleTabl from '../assets/Google_tablet.webp';
import facebookimg from '../assets/Facebook.webp';
import facebookTabl from '../assets/Facebook-blog.webp';
import { useTranslation } from 'react-i18next';
import './SignUp.scss';

const SignUp = ({ onSignUp, navigate }) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPaswwordValid] = useState(true);

  const validateName = (name) => {
    return name.length > 0;
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key === email) {
        return false;
      }
    }
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length > 7;
  };

  const handleSubmit = (event) => {
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    setIsEmailValid(isEmailValid);
    setIsNameValid(isNameValid);
    setIsPaswwordValid(isPasswordValid);
    event.preventDefault();
    if (isNameValid && isEmailValid && isPasswordValid) {
      onSignUp(email, name);
      navigate('/');
    } 
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sign_up_container">
      <div className="form_container">
        <div className="form_details">
          <h2>{t('sign_up')}</h2>
          <form>
            <label
              htmlFor="name"
              className={isNameValid ? '' : 'invalid_label'}>{t('your_name')}</label>
            <input
              type="text"
              id="name"
              placeholder={isNameValid ? t('your_name') : t('forgot_name')}
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className ={isNameValid? '' : 'invalid_input' }
            />

            <label htmlFor="email"
              className={isEmailValid ? '' : 'invalid_label'}>
              {isEmailValid ? t('email') : t('invalid_email')}
            </label>
            <input
              type="email"
              id="email"
              placeholder={isEmailValid ? t('enter_email') : t('forgot_email')}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className={isEmailValid ? '' : 'invalid_input'}
            />

            <label
              htmlFor="password"
              className={isPasswordValid ? '' : 'invalid_label'}>
              {isPasswordValid ? t('password') : t('enter_password')}
            </label>
            <input type="password"
              id="password"
              placeholder={isPasswordValid ? t('enter_password') : t('forgot_password')}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className={isPasswordValid ? '' : 'invalid_input'}
            />
          </form>

          <p className="text_for_servces_policy"> {t('i_agree')}{' '}
            <Link to={'/privacy'}>{t('terms_of_service')}</Link>
            <Link to={'/privacy'}>{t('privacy_policy')}</Link>
          </p>

          <button id = "create_account" onClick={handleSubmit}>{t('create_account')}</button>

          <div className="sign_up_with">
            <h3>{t('sign_in_with')}</h3>
            <div className="sign_up_with_but">
              <button><img className="for_pc_sign_up" src={googleimg}  /><img className="for_tab_sign_up" src={googleTabl}  />Google</button>
              <button><img className="for_pc_sign_up" src={facebookimg} /><img className="for_tab_sign_up" src={facebookTabl} />Facebook</button>
            </div>
          </div>

          <p className="link_text_for_log_in"> 
            {t('have_account')} <Link to={'/sign_in'}>{t('sign_in')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
