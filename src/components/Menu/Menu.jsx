import React from "react";
import "./Menu.scss";

export function Menu(props) {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
        <li>
          <a href="#">Item 4</a>
        </li>
        <li>
          <a href="#">Item 5</a>
        </li>
      </ul>
    </nav>
  );
}
