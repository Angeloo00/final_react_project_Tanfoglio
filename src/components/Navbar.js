import React, { useState } from 'react'
import Logo from'../assets/logo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import "../styles/Navbar.css";

function Navbar() {

  const [aperturaLinks, setAperturaLinks] = useState(false)

  const verifyNavbar = () => {
    setAperturaLinks(!aperturaLinks)
  };

  const closeNavbar = () => {
    setAperturaLinks(false)
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={aperturaLinks ? "apri" : "chiudi"}>
        <img src={Logo} />
        <div className='linkNascosti'>
          <Link to="/" onClick={closeNavbar}> Home </Link>
          <Link to="/menu" onClick={closeNavbar}> Menu </Link>
          <Link to="/about" onClick={closeNavbar}> About </Link>
          <Link to="/contatti" onClick={closeNavbar}> Contatti </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/" onClick={closeNavbar}> Home </Link>
        <Link to="/menu" onClick={closeNavbar}> Menu </Link>
        <Link to="/about" onClick={closeNavbar}> About </Link>
        <Link to="/contatti" onClick={closeNavbar}> Contatti </Link>
        <button onClick={verifyNavbar}>
            <ReorderIcon/>
        </button>
      </div>

    </div>
  );
}

export default Navbar
