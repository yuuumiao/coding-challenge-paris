import React from "react";
import { NavLink } from 'react-router-dom'

const NavMain = () => {
  return (
    <div className="NavMain">

    <NavLink className="NavMain__link" exact to="/">Homepage</NavLink>
    <NavLink className="NavMain__link" exact to="/temperature">temperature</NavLink>
    <NavLink className="NavMain__link" exact to="/customize-image">customize image</NavLink>
      
    </div>
  );
};

export default NavMain;
