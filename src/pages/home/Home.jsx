import React from 'react'

const Home = () => {

  const APP_ID = "020f0e58";
  const APP_KEY = "7384df4667cdba1b0b48c1a225cd3714"
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;


  return (
    <div>
      Home
    </div>
  )
}

export default Home
