import style from "./movieDetails.module.css"
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Button } from "@mui/material"

const MovieDetails = () => {
  return (
    <div className={style.movieDetailsContainer}>
      <Navbar />
      <div className={style.movieDetailsBody}>
        <img src="" alt="" />
        <p></p>
        <p>rating stars</p>
        <form>
            <textarea name="" id="" cols="30" rows="10" />
            <Button type="submit" variant="contained" color="primary" size="large" disabled={!formik.dirty || !formik.isValid}>Sign Up</Button>
        </form>
        <h2></h2>
        <p>rating start mui</p>
        <p></p>
      </div>
    </div>
  )
}

export default MovieDetails
