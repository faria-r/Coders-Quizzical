import { Navbar } from 'flowbite-react';
import React from 'react';

const New = () => {
    return (
        <div >
            <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand> 
    <span className="self-center whitespace-nowrap text-3xl text-amber-700 font-semibold">
      Coders Quizzical
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/">
      Topic
    </Navbar.Link>
    <Navbar.Link href="/statistics">
      Statistics
    </Navbar.Link>
    <Navbar.Link href="/blog">
      Blog
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default New;