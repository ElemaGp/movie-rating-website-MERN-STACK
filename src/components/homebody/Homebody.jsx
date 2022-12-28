import style from "./homebody.module.css";
import {movies} from "../../moviesArray"
import {series} from "../../moviesArray"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/bundle';
const Homebody = () => {

  return (
    <div className={style.homebodyWrapper}>
        <div className={style.homebodyCover}>
            <h1 className={style.homebodyText}>MOVIES</h1>
            <Swiper 
            className={style.homebodyList}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay = {{
              delay: 2500,
              disableOnInteraction: false,
              }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                {
                  movies.map((movie)=>(
                    <SwiperSlide className={style.eachMovie} key={movie.id}>
                      <img src={movie.image} alt="moviepic" className={style.movieImg}/>
                      <h2>{movie.title}</h2>
                      <p className={style.movieDesc}>{movie.desc}</p>
                    </SwiperSlide>
                  ))
                }
            </Swiper>
        </div>
        <div className={style.homebodyCover}>
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
            