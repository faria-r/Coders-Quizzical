import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-3xl text-amber-700 font-semibold">
            Coders Quizzical
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link  to={"/"}>Home</Link>
          <Link  to={"/topic"}>Topic</Link>
          <Link  to={"/statistics"}>Statistics</Link>
          <Link  to={"/blog"}>Blog</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
