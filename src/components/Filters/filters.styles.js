import styled from 'styled-components';

export const FiltersWrapper = styled.section`
  width: 17%;
  height: 100%;
  padding: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1E2E34;
  margin-left: 20px;
`

export const FiltersContainer = styled.div`
position: relative;
font-size: 16px;
color: white;
`

export const InputFilter = styled.select`
  width: 100%;
  height: 100%;
  border: white 1px solid;
  background-color: transparent;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  min-width: 200px;
  padding: 10px 5px;
  box-shadow: 0 0 0 1px rgba(113 119 144, 0.25);
  color: black;
  transition: all 0.3s ease-in-out;
  &:focus{
    outline: none;
    box-shadow: 0 0 0 1px rgba(113 119 144, 0.5);
  }
`

export const ResetBtn = styled.button`
  border: white 1px solid;
  background-color: transparent;
  font-size: 16px;
  font-weight: 900;
  color: white;
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 30px;
  min-width: 200px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover{
   transform: scale(1.05);
   box-shadow: 0 0 0 1px #8A9CE4;
  }
`