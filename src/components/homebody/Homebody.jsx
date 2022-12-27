import style from "./homebody.module.css";
import {movies} from "../../moviesArray"

const Homebody = () => {

  return (
    <div className={style.homebodyWrapper}>
        <div className={style.homebodyMovies}>
            <h2>MOVIES</h2>
            <div className={style.moviesList}>
                {
                  movies.map((movie)=>(
                    <div className={style.eachMovie} key={movie.id}>
                      <img src={movie.image} alt="moviepic" />
                      <h2>{movie.title}</h2>
                      <p>{movie.desc}</p>
                    </div>
                  ))
                }
            </div>
        </div>
        <div className={style.homebodySeries}>
            <h2>SERIES</h2>
            <div className={style.seriesList}>

            </div>
        </div>
    </div>
  )
}

export default Homebody
            