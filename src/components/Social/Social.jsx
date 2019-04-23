import React from "react";
import "./Social.scss";
import { socialMediaNames } from "../../config/data_config";

export const Social = () => (
  <ul className="social">
    {socialMediaNames.map((social, socialKey) => (
      <li key={socialKey}>
        <a className={social} href="#" />
      </li>
    ))}
  </ul>
);
