import style from "./navbar.module.css"
import React from 'react'

const Navbar = () => {

  return (
    <div className={style.navbarWrapper}>
      <h2 className={style.navbarLeft}>MRating</h2>
      <div className={style.navbarRight}>
        <input type="text" />
            <img 
            src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=740&t=st=1672089771~exp=1672090371~hmac=c04641cada23f500b57f9b38fc066092e2cc9192e5e4dc463cdd1a7aec4ea888" 
            alt="" 
            className={style.navbarImg}
            />
        <button>LOGOUT</button>  {/*convert to reusable button later */}
      </div>
    </div>
  )
}

export default Navbar
