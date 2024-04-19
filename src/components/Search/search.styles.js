import styled from 'styled-components'

export const SearchBar = styled.form`
  height: 40px;
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  padding-left: 16px;
  border-radius: 4px;
  transition: 0.4s;
  padding-left: 0;
  transition: all 0.3s ease-in-out;
`

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: white 2px solid;
  background-color: transparent;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  width: 400px;
  padding: 0 20px 0 40px;
  box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
  color: white;
  &::placeholder{
   font-size: 15px;
  color: white;
  font-weight: 700;
  }
  &:focus-visible {
   outline: none;
   width: 600px;
}
`

export const SearchSubmit = styled.button`
  border: white 2px solid;
  color: white;
  background-color: transparent;
  border-radius: 10px;
  padding: 5px 20px;
  transition: padding 0.3s ease-in-out;
  &:hover {
   padding: 5px 40px;
  }
`