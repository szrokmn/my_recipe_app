import React from 'react'
import { FormContainer, LoginContainer, StyledImg, StyledInput } from './Login.style'
import meal from "../../assets/meal.svg"



const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
       <StyledImg src={meal} />
       {"<CW/>"}Recipe 
       <StyledInput/>
       
      </FormContainer>     
    </LoginContainer>
  )
}

export default Login;