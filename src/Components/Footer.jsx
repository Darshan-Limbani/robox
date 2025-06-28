import React from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from '../utils/constants';


const FooterArr = [
  {
    label: "About",
    href: ROUTES.ABOUT
  },
  {
    label: "Contact",
    href: ROUTES.CONTACT
  },
  {
    label: "Privacy Policy",
    href: ROUTES.PRIVACY_POLICY
  },
  {
    label: "Terms of Service",
    href: ROUTES.TERM_SERVICE
  }
]


const Footer = () => {
  return (
    <div
      className={"w-full max-w-[360px] flex flex-col items-center justify-center p-4 bg-gray-100 text-gray-700 text-sm pt-5 mt-2"}>
      <div className={"flex flex-row items-center justify-center  gap-1 mb-3"}>
        {FooterArr.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={"rounded-full p-2 bg-[#003541] hover:bg-[#00293a] text-white text-[12px] font-semibold"}
          >
            {item.label}
          </Link>
        ))}
        
        {/*<div className={"flex space-x-4"}>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"
             className={"rounded-full p-2 bg-[#003541] hover:bg-[#00293a] text-white text-[12px] font-semibold"}>
            Twitter
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"
             className={"text-blue-500 hover:underline"}>
            Facebook
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"
             className={"text-blue-500 hover:underline"}>
            Instagram
          </a>
        </div>*/}
      </div>
      <p className={"mb-2"}>&copy; {new Date().getFullYear()} Robox, All rights reserved.</p>
    
    </div>
  );
};

export default Footer;