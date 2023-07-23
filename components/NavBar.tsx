import { ActiveLink } from './ActiveLink';

import { Poppins } from "next/font/google";
import styles from './Compontens.module.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar = () => {
  return (
    <nav className={`${styles['menu-container']} ${poppins.className}`}>
      {
        menuItems.map( ({href, text}) => (
          <ActiveLink
            key={href}
            href={href}
            text={text}
          />
        ))
      }
    </nav>
  );
}