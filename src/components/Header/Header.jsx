import React from "react";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { Button } from "../Button/Button";
import { Parallelogram } from "../Parallelogram/Parallelogram";
import "./Header.scss";

export const Header = () => (
  <header className="header">
    <div className="header_parallelogram">
      <Parallelogram
        height="135px"
        width="182px"
        background="rgba(41, 152, 204, 0.8)"
        transform="skew(-35deg)"
      />
    </div>
    <Logo />
    <div className="header_menuWrapper">
      <Menu />
    </div>
    <Button
      icon=""
      color="rgb(65, 50, 129)"
      background="transparent"
      width="155px"
      borderColor="rgb(65, 50, 129)"
      text="Button text"
    />
  </header>
);
