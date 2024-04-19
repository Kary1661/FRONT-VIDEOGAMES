import React from 'react'
import { Link } from 'react-router-dom'
import logoGames from '../../assets/logoGames.jpg'
import {
  MainBtn,
  SuccessLogo,
  SuccessTitle,
  SuccessWrapper,
} from './success.styles'

export default function Success() {
  return (
    <SuccessWrapper>
      <SuccessLogo src={logoGames} alt="logo" />
      <SuccessTitle>Game added correctly!!</SuccessTitle>
      <Link to="/home">
        <MainBtn>Go back home</MainBtn>
      </Link>
    </SuccessWrapper>
  )
}
