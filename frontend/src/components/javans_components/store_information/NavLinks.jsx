import React from "react";

const NavLinks = ({ name, link }) => {
  return <a href={link}>{name}</a>;
};

export default NavLinks;
