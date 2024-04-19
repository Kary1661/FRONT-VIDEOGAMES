import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  place-items: center;
  place-content: space-around;
  background-color: #1E2E34;
  border-bottom: 2px solid black;
  z-index: 100;
  display: flex;
  top: 0;
`

export const Logo = styled.img`
  width: auto;
  height: 100px;
  cursor: pointer;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 30px;
`

export const Item = styled(NavLink)` 
  position: relative;
  min-width: 105px;
  text-align: center;
  color: #fff;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  display: block;
  padding: 1em;
  cursor: pointer;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:hover {
    color: #be0d51;
  }
  &[aria-current]:not([aria-current="false"]) {
    color: #be0d51;
  }
`

export const Item_Link = styled.div`
  padding: 5px;
  text-decoration: none;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3em;
  font-weight: 800;
  border: white 3px solid;
  background-color: transparent;
  border-radius: 4px;
`
