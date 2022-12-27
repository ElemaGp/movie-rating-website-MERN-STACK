import style from "./home.module.css"
import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Homebody from "../../components/homebody/Homebody"

const Home = () => {
  return (
    <div className={style.homeContainer}>
        <Navbar />
        <Homebody />
    </div>
  )
}

export default Home