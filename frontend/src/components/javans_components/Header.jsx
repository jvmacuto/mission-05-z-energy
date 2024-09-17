import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <NavLinks name="Products and Services" link="/" />
          <NavLinks name="For Businesses" link="/" />
          <NavLinks name="Sustainability" link="/" />
          <NavLinks name="About Z" link="/" />
          <NavLinks name="Find A Station" link="/find-a-station" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
