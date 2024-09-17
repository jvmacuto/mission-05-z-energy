import React from "react";

const NavLinks = ({ name, link }) => {
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
};

export default NavLinks;
