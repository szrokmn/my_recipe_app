import React from 'react'
import { FormContainer, LoginContainer, StyledImg } from './Login.style'
import meal from "../../assets/meal.svg"



const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
       <StyledImg src={meal} />

      </FormContainer>     
    </LoginContainer>
  )
}

export default Login;