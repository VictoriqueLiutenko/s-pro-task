import React from "react";
import "./Menu.scss";
import { menuLinks } from "../../config/data_config";

export const Menu = () => (
  <nav className="menu">
    <ul>
      {menuLinks.map((link, linkKey) => (
        <li key={linkKey}>
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  </nav>
);
