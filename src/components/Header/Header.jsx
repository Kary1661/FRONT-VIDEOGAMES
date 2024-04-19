import React from 'react'
import { NavLink } from 'react-router-dom'
import logoGames from '../../assets/logoGames.jpg'
import Search from '../Search/Search'
import { Container, Item, Item_Link, Logo, NavList } from './header.styles.js'

export default function Header() {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  return (
    <Container>
      <NavLink to="/">
        <Logo src={logoGames} alt="logo" />
      </NavLink>
      <Search />
      <nav>
        <NavList>
          <li>
            <Item onClick={handleClick} to="/home">
              <Item_Link>
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </Item_Link>
            </Item>
          </li>
          <li>
            <Item onClick={handleClick} to="/add-game">
              <Item_Link>
                <i className="fa-solid fa-plus"></i>
                <span>Add Game</span>
              </Item_Link>
            </Item>
          </li>
        </NavList>
      </nav>
    </Container>
  )
}
