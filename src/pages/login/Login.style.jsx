import styled from "styled-components";
import Flex from "../../components/globalStyle/Flex.style";



export const LoginContainer = styled(Flex)`
    height: 100vh;
    background-image: url("https://picsum.photos/1600/900");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const FormContainer= styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  background: rgba(0, 173, 181, 0.5);
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 0.5rem;
  flex-direction: column;
`;

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 15rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
`;