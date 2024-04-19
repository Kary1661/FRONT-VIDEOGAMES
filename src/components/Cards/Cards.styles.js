import styled from "styled-components";

export const CardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #192134;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  button{
   border: none;
   background-color: #44669B;
   border-radius: 4px;
   padding: 5px 20px;
   transition: padding 0.3s ease-in-out;
   cursor: pointer;
   &[disabled] {
    background-color: #ccc !important;
    color: #14162b;
    cursor: default;
   }
  }
`

export const PageNumber = styled.button`
  border: none;
  background-color: #14162b;
  border-radius: 4px;
  padding: 5px;
  transition: padding 0.3s ease-in-out;
  cursor: pointer;
`