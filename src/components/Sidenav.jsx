import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = (nav) => {
    setNav(!nav);
  };


  return (
    <div>
      <AiOutlineMenu className="absolute top-4 right-4 z-[99]" />
    </div>
  );
};

export default Sidenav;
