import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
export const AddGameContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #253761;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  animation: ${fadeIn} 6s cubic-bezier(0.25, 1, 0.3, 1) both;
  padding: 0 50px;
  justify-content: center;
  padding: 50px;
`

export const AddGameFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`

export const AddGameForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 50px;
  input,
  textarea {
   padding: 8px 20px;
  border: none;
  background-color: #154C97;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
  color: darkgray;
  }
  input:focus:not(:focus-visible),
  textarea:focus-visible {
   outline: none;
 }
`

export const SelectorsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  border: none;
  background-color: #0C2A5B;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
  color: #f9fafb;
`

export const SelectorsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`

export const SentBtn = styled.button`
  box-sizing: border-box;
  border: white 2px solid;
  background-color: #00888A;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 16px;
  transition: scale 0.3s ease-in-out;
  cursor: pointer;
  &:disabled{
   opacity: 0.5;
   cursor: default;
   overflow: hidden;
  }
  &:enabled:hover{
   scale: 1.03;
   letter-spacing: 2px;
   background: #16D5D8;
    box-shadow: 0 0 10px #16D5D8, 0 0 40px #16D5D8, 0 0 80px #16D5D8;
  }
`




