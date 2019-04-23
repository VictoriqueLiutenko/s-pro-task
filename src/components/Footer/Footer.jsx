import React from "react";
import { Logo } from "../Logo/Logo";
import "./Footer.scss";
import { Social } from "../Social/Social";
import { footerLinks } from "../../config/data_config";

export const Footer = () => (
  <footer className="footer">
    <div className="footer_whiteBg">
      <Logo />
      <div className="footer_social">
        <Social />
      </div>
    </div>
    <div className="footer_grayBg">
      <ul className="footer_conditionsLinks">
        {footerLinks.map((link, linkKey) => (
          <li key={linkKey}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
      <div>© 2018 S-PRO - All rights reserved</div>
    </div>
  </footer>
);
