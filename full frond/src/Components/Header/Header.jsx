// import React from 'react'
import "./Header.css";
import Nav from '../Nav/Nav'
const Header = () => {
  return (
    <header>
        <img id="logo" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/10/rick-and-morty-1.jpg" alt="imagen de rick and morty"></img>
        <h1 id="titulo">Rick and Morty</h1>
        <Nav></Nav>
    </header>
  )
}

export default Header