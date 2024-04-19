import styled from 'styled-components'

export const SuccessWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #253761;
`

export const SuccessLogo = styled.img`
  width: 200px;
  height: auto;
`

export const SuccessTitle = styled.h1`
  font-size: 3rem;
  position: relative;
  color: white;
  mix-blend-mode: lighten;
  &:before,
  &:after {
   position: absolute;
   top: 0;
   content: 'Game added correctly!!';
   width: 100%;
  }
  &:before {
   left: -1px;
   text-shadow: 1px 0 rgba(red, 0.7);
  }
  &:after {
   left: 1px;
   text-shadow: -1px 0 rgba(blue, 0.7);
}
`

export const MainBtn = styled.button`
  border: white solid 2px;
  background-color: #239C8B;
  border-radius: 4px;
  padding: 10px 5px;
  color: white;
  transition: padding 0.3s ease-in-out;
  margin-top: 30px;
  min-width: 200px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover{
   transform: scale(1.05);
    padding: 10px 10px;
    letter-spacing: 2px;
  }
`
