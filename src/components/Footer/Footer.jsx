import React from "react";
import { Logo } from "../Logo/Logo";
import "./Footer.scss";
import { Social } from "../Social/Social";

export function Footer(props) {
  return (
    <footer className="Footer">
      <div className="Footer-WhiteBg">
        <Logo />
        <div className="Footer-Social">
          <Social />
        </div>
      </div>
      <div className="Footer-GrayBg">
        <ul className="Footer-ConditionsLinks">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Tokensale Agreement</a>
          </li>
        </ul>
        <div>© 2018 S-PRO - All rights reserved</div>
      </div>
    </footer>
  );
}
