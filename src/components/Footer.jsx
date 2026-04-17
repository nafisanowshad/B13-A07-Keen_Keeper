import React from "react";
import instra from "../../public/instagram.png";
import fb from "../../public/facebook.png";
import ttr from "../../public/twitter.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-5">
      <div className="space-y-2">
        <p className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white">KeenKeeper</p>
        <p className="text-white text-[15px] md:text-[17px] lg:text-[19px] opacity-80">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="text-[21px] md:text-[23px] lg:text-[25px] font-medium text-white">Social Links</p>

        <div className="flex gap-5 lg:gap-6 pb-10">
          <img src={instra} alt="instragram logo" />
          <img src={fb} alt="facebook logo" />
          <img src={ttr} alt="twitter logo" />
        </div>
      </div>

      <div className="footer grid grid-cols-1 md:grid-cols-2 opacity-80">
        <div>
          <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>

        <div className="flex gap-3">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
