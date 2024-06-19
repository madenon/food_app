import React, { useState } from 'react';
import "./Home.css"
import Header from '../../components/Header/Header';
import ExploremMenu from '../../components/ExploreMenu/ExploremMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownLoad from '../../components/AppDownload/AppDownLoad';
const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div>
      
      <Header/>
      <ExploremMenu category={category} setCategory={setCategory}/>
      <FoodDisplay  category={category}/>
      <AppDownLoad />
    </div>
  );
};

export default Home;