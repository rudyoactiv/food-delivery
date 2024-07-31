import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const[category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu id="explore-menu" category={category} setCategory={setCategory}/>
      <FoodDisplay id="app-download" category={category}/>
      <AppDownload id="footer"/>
    </div>
  )
}

export default Home
