import React from 'react';
import notFound from '../assets/404.webp';
import './PageNotFound.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const PageNotFound = () => {
  const navigat = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="page-not-found">
      <img src={notFound} alt="Page not found" />
      <svg className="page-not-found_svg second" width="1920" height="428" viewBox="0 0 1920 428" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M297.611 288.876C164.318 197.864 57.9119 81.3036 0.6875 1.69044L2.31128 0.522339C59.4202 79.9749 165.665 196.361 298.738 287.224C431.821 378.093 591.611 443.351 755.863 420.789C841.405 409.039 916.074 371.818 990.205 324.661C1023.69 303.36 1057.05 280.045 1091.25 256.14C1094.9 253.583 1098.57 251.019 1102.25 248.45C1140.31 221.872 1179.53 194.766 1221.16 169.101C1387.77 66.4039 1593.15 -13.1916 1919.71 55.6504L1919.29 57.6083C1593.34 -11.1066 1388.48 68.3163 1222.21 170.805C1180.63 196.437 1141.46 223.513 1103.4 250.09C1099.72 252.66 1096.05 255.225 1092.39 257.784C1058.19 281.684 1024.8 305.024 991.278 326.349C917.05 373.569 842.094 410.964 756.135 422.771C591.188 445.428 430.894 379.882 297.611 288.876Z" fill="url(#paint0_linear_1706_10662)"/>
        <defs>
          <linearGradient id="paint0_linear_1706_10662" x1="1932.82" y1="77.6967" x2="-0.844243" y2="77.6967" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DAD2FF"/>
            <stop offset="0.1875" stopColor="#C4B9FF"/>
            <stop offset="0.833122" stopColor="#9480FF"/>
            <stop offset="1" stopColor="#BDB0FF"/>
          </linearGradient>
        </defs>
      </svg>
      <svg className="page-not-found_svg" width="1700" height="640" viewBox="0 0 1700 640" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M43.85 37.201C27.5661 24.9019 12.7946 13.7451 0.306641 1.72089L1.69355 0.279297C14.0868 12.2123 28.7351 23.2766 45.0071 35.5674C49.0702 38.6363 53.2345 41.7818 57.4902 45.0363C78.765 61.306 102.245 80.2467 126.538 105.855C175.135 157.084 226.913 234.919 270.952 371.346L270.96 371.372L270.967 371.398C279.124 402.34 290.866 430.605 305.824 456.183C366.457 559.864 480.05 619.57 622.352 634.265C764.654 648.96 935.569 618.623 1110.6 542.307L1110.62 542.299L1110.64 542.292C1225.11 497.689 1356.26 495.823 1466.92 515.353C1522.26 525.119 1572.51 540.24 1613.01 558.065C1653.49 575.878 1684.34 596.435 1700.78 617.133L1699.22 618.377C1683.08 598.057 1652.57 577.661 1612.21 559.896C1571.87 542.144 1521.78 527.065 1466.58 517.323C1356.16 497.838 1225.41 499.723 1111.38 544.149C936.119 620.563 764.862 650.993 622.146 636.255C479.424 621.516 365.148 561.587 304.098 457.194C289.049 431.46 277.241 403.035 269.04 371.934C225.081 235.765 173.445 158.209 125.087 107.232C100.901 81.7362 77.5164 62.8696 56.2756 46.6259C52.048 43.3929 47.9021 40.2616 43.85 37.201Z" fill="url(#paint0_linear_1706_10661)"/>
        <defs>
          <linearGradient id="paint0_linear_1706_10661" x1="1683.78" y1="638.351" x2="0.306139" y2="638.351" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9E2FC"/>
            <stop offset="0.208333" stopColor="#DAE4FE"/>
            <stop offset="0.40625" stopColor="#CAD1E5"/>
            <stop offset="0.734375" stopColor="#E3E7F3"/>
            <stop offset="1" stopColor="#B6BFD9"/>
          </linearGradient>
        </defs>
      </svg>
      <h1>{t('oops')}</h1>
      <p>{t('p_oops')}</p>
      <button onClick={() => navigat('/')}>{t('back_to_home')}</button>
    </div>
  );
};

export default PageNotFound;


















// LD project