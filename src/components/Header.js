import React, {useState} from 'react';
import './Header.scss';
import Generate from './Generate/Generate';
import PrivPol from './PrivPol';
import Pricing from './Pricing';
import Blog from './Blog';
import SignUp from './SignUp';
import SignIn from './SignIn';
import PageNotFound from './PageNotFound';
import { useTranslation } from 'react-i18next';
import { Routes, Route, NavLink, Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [account, setAccount] = useState(true);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }; 

  const handleSignUp = (email, name) => {
    setUser({ name });
    localStorage.setItem(email, name);
  };

  const handleSignIn = (email) => {
    for (let i = 0; i < localStorage.length; i++) {
      const storageEmail = localStorage.key(i);
      if (storageEmail === email) {
        const name = localStorage.getItem(storageEmail);
        setUser({name});
        break;
      }
    }
  };
  
  const handleLogout = () => setUser(null);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setAccount(!account);
  };

  const openAccount = () => setAccount(!account);

  return ( 
   
    <>
      <div id="top" className="header_navigate">
        <p className={`header_navigate_name${menuOpen ? ' open' : ''}`} onClick={()=>navigate('/')}>iTerms</p>
        <div className={`header_navigate_menu${menuOpen ? ' open' : ''}`}>
          <nav className="header_navigate_menu_link">
            <NavLink dir="auto" className={({isActive}) => isActive ? 'menuLinkActive' : 'header_navigate_menu_link_noLink'} to="/" onClick = {menuOpen? toggleMenu: null }>{t('header-generate')}</NavLink>
            <NavLink className={({isActive}) => isActive ? 'menuLinkActive' : 'header_navigate_menu_link_noLink'} to="/privacy" onClick = {menuOpen? toggleMenu: null }>{t('header-privacy')}</NavLink>
            <NavLink className={({isActive}) => isActive ? 'menuLinkActive' : 'header_navigate_menu_link_noLink'} to="/pricing" onClick = {menuOpen? toggleMenu: null }>{t('header-pricing')}</NavLink>
            <NavLink className={({isActive}) => isActive ? 'menuLinkActive' : 'header_navigate_menu_link_noLink'} to="/blog" onClick = {menuOpen? toggleMenu: null }>{t('header-blog')}</NavLink>
          </nav>
          <div className="header_navigate_menu_switcher">
            <select className="header_navigate_menu_switcher_selected" onChange={(e)=>changeLanguage(e.target.value)}>
              <option value="en">En</option>
              <option value="ua">Ua</option>
            </select><span>v</span>
          </div>
          <div className="header_navigate_menu_button">
            {user ? 
              <button className="header_navigate_menu_button_signup" onClick={handleLogout}>{t('log_out')}: {user.name}</button>
              :
              <>
                <h2 className="header_navigate_menu_button_link" onClick={openAccount}>{t('account-open')}<span>v</span></h2>
                {account &&
                  <>
                    <Link to="/sign_in" className="header_navigate_menu_button_login" onClick = {menuOpen? toggleMenu: null }>{t('header-logIn')}</Link>
                    <button className="header_navigate_menu_button_signup" onClick={() => { navigate('/sign_up'); if(menuOpen) toggleMenu(); }}>{t('header-signUp')}</button>
                  </>
                }
              </>
            }
          </div>
        </div>
        <button className={`menu-toggle${menuOpen ? ' open' : ''}`} onClick={toggleMenu}>
          <span className="menu-toggle-line"></span>
          <span className="menu-toggle-line"></span>
          <span className="menu-toggle-line"></span>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Generate />} />
        <Route path="/privacy" element={<PrivPol />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign_up" element={<SignUp onSignUp={handleSignUp} navigate = {navigate}/>}/>
        <Route path="/sign_in" element={<SignIn onSignIn={handleSignIn} navigate = {navigate}/>} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>
  );};
export default Header;
