import style from "./home.module.css"
import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className={style.homeContainer}>
        <Navbar />
        
    </div>
  )
}

export default Home