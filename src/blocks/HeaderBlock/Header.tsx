// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import styles from './Header.module.css';
// import { Media } from '@/payload-types';

// interface HeaderProps {
//   logo?: Media;
//   menuItems?: Array<{
//     label: string;
//     link: string;
//   }> ;
//   disableInnerContainer?: boolean; 
// }

// const Header: React.FC<HeaderProps> = ({ logo, menuItems = [], disableInnerContainer }) => {
//   return (
//     <header className={styles.header}>
//       <div className={`${styles.container} ${disableInnerContainer ? '' : 'container'}`}>
//         <div className={styles.logo}>
//           <Link href="/">
//             {logo && logo.url ? (
//               <img src={logo.url} alt="Logo" width={150} height={50} />
//             ) : (
//               <div className={styles.logoShape}>
//                 <div className={styles.shape1}></div>
//                 <div className={styles.shape2}></div>
//                 <div className={styles.shape3}></div>
//               </div>
//             )}
//           </Link>
//         </div>
//         <nav className={styles.nav}>
//           {menuItems && menuItems.length > 0 && menuItems.map((item, index) => (
//             <Link key={index} href={item.link} className={styles.navLink}>
//               {item.label}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Media } from '@/payload-types';

interface HeaderProps {
  logo?: Media;
  menuItems?: Array<{
    label: string;
    link: string;
  }>;
  disableInnerContainer?: boolean;
}

const Header: React.FC<HeaderProps> = ({ logo, menuItems = [], disableInnerContainer }) => {
  return (
    <header className={styles.header}>
      {/* Container div will toggle the 'container' class based on disableInnerContainer */}
      <div className={`${styles.container} ${disableInnerContainer ? '' : 'container'}`}>
        
        {/* Logo Section */}
        <div className={styles.logo}>
          <Link href="/">
            {logo?.url ? (
              <img src={logo.url} alt="Logo" width={150} height={50} />
            ) : (
              <div className={styles.logoShape}>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}></div>
                <div className={styles.shape3}></div>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className={styles.nav}>
          {/* Only render menu items if they exist */}
          {menuItems.length > 0 && menuItems.map((item, index) => (
            <Link key={index} href={item.link} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
