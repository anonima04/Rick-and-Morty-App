// import React from 'react'
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Nav = () => {
  const navigate = useNavigate();

  const handleFilterClick = (species) => {
    navigate(`/filter?species=${species}`);
  };

  return (
    <nav>
      <div className="filter">
        <Link to={"/"}>
          <Button sx={{ margin: 3, width: 130 }} variant="outlined" onClick={() => handleFilterClick('')}>
            Inicio
          </Button>
        </Link>
        {/* <Link to={"/filter"}> */}
          <Button sx={{ margin: 3, width: 130 }} variant="outlined" onClick={() => handleFilterClick('Human')}>
            Humans
          </Button>
        {/* </Link> */}
        {/* <Link to={"/filter"}> */}
          <Button sx={{ margin: 3, width: 130 }} variant="outlined" onClick={() => handleFilterClick('Alien')}>
            Aliens
          </Button>
        {/* </Link> */}
        <Link to={"/about"}>
          <Button sx={{ margin: 3, width: 130 }} variant="outlined">
            Acerca
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
