import React from "react";
import "./Menu.css";

const Menu = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "Menu active" : "Menu"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default Menu;
