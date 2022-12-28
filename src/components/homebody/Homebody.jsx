import style from "./homebody.module.css";
import {movies} from "../../moviesArray"
import {series} from "../../moviesArray"

const Homebody = () => {

  return (
    <div className={style.homebodyWrapper}>
        <div className={style.homebodyMovies}>
            <h1 className={style.homebodyText}>MOVIES</h1>
            <div className={style.homebodyList}>
                {
                  movies.map((movie)=>(
                    <div className={style.eachMovie} key={movie.id}>
                      <img src={movie.image} alt="moviepic" className={style.movieImg}/>
                      <h2>{movie.title}</h2>
                      <p className={style.movieDesc}>{movie.desc}</p>
                    </div>
                  ))
                }
            </div>
        </div>
        <div className={style.homebodySeries}>
            <h1 className={style.homebodyText}>SERIES</h1>
            <div className={style.homebodyList}>
            {
                  series.map((serie)=>(
                    <div className={style.eachMovie} key={serie.id}>
                      <img src={serie.image} alt="moviepic" className={style.movieImg}/>
                      <h2>{serie.title}</h2>
                      <p className={style.movieDesc}>{serie.desc}</p>
                    </div>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Homebody
            