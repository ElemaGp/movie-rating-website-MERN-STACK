import style from "./movieDetails.module.css"
import React, { useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Button, Rating, Stack } from "@mui/material"
import { toast, ToastContainer } from "react-toastify"


const MovieDetails = () => {
    const [ratingValue, setRatingValue] = useState(null);
    
    const handleChange = (e) =>{
        setRatingValue(e.target.value);
        notify();
    }

    const notify = () => {
        toast.success("Thanks for your feedback!", {     
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }); 
    }

    const movieDeets = [
        {
            id: 1,
            image: "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/whitney-houston-i-wanna-dance-with-somebody-movie-review-2022/i-wanna-dance-with-somebody-movie-review-2022.jpeg",
            title: "Whitney Houston: I Wanna Dance with Somebody",
            desc: "About 25 minutes into 'Whitney Houston: I Wanna Dance with Somebody,' an inarticulate, slapdash musical biopic about the famed songstress, the film reaches its high point: Arista Records head Clive Davis (Stanley Tucci) enters the nightclub where Houston (Naomi Ackie) and her gospel legend mother Cissy Houston (Tamara Tunie) are performing. When the latter sees the A&R man taking his seat, she fakes losing her voice, clearing the way for her daughter to sing 'The Greatest Love of All.' Her vocals climb, soaring to the familiar majestic heights that catapulted her toward stardom. We watch Davis watch her. In one close-up, you can almost imagine dollar signs dancing around his head. The scene is so stirring one woman in my screening pulled out a lighter and waved her flame to the rhythm of Houston's unforgettable vibrato. During that brief scene, you can imagine 'I Wanna Dance with Somebody' gravitating toward a clear-eyed narrative about the annihilation of a voice, talent, and person by flattening her identity for the commodification of an image. But in working with an unfocused script by Anthony McCarten ('Bohemian Rhapsody'), director Kasi Lemmons flounders when rendering the woman beyond the tabloid cliff notes of her life. 'I Wanna Dance with Somebody' takes great pains to craft an intuitive throughline for Houston's life, as we briefly open in 1994 at the American Music Awards before flashing back to 1983 in New Jersey. But how Lemmons ultimately maneuvers back to the AMAs makes little emotional or logical sense. Still, for a short time, we're ready to absorb the saga with Lemmons. We see Houston (her friends call her 'Nippy') meeting and forming a lesbian relationship with Robyn Crawford (Nafessa Williams)—Lemmons should be complimented for not avoiding this portion of the singer's personal life. Houston eventually signs with the steadfast Clive Davis, takes advice from her parents Cissy and the selfish patriarch John Houston (Clarke Peters) to tone down her butch image in lieu of becoming America's princess. Soon enough, she begins racking up hits. Unfortunately, these scenes rush by, to the point that their brusque speed fools you into believing that Lemmons is merely trying to get to the real story she wants to tell. But that story never arrives. Instead, the film hops and skips through the highlights of Houston's career: making the music video for 'How Will I Know,' choosing the demo tape of the titular 'I Wanna Dance with Somebody' from Davis' pile of cassettes, and performing 'The Star-Spangled Banner' at Super Bowl XXV. All the while, hampered by her drug addiction, her relationship with Crawford frays. Instead, she chooses her image, career, and desire for Bobby Brown (played by Ashton Sanders, who gives the R&B singer a bundle of tics and a vocal cadence alarmingly close to DMX).",
            comments: [
                {
                    name: "James Ake",
                    rating: 5,
                    comment: "Brilliant movie!. I loved every bit of it"
                },
                {
                    name: "Nkechi Eze",
                    rating: 3,
                    comment: "The movie was average"
                },
                {
                    name: "Kalu Emmanuel",
                    rating: 1,
                    comment: "Horrible movie. Wasted my time"
                }
        ]
        }
      ]

  return (
    <div className={style.movieDetailsContainer}>
      <Navbar />
      <div className={style.movieDetailsBody}>
        <img src={movieDeets.image} alt="img" />
        <p>{movieDeets.desc}</p>
        <Stack spacing={2}>
            <Rating value={ratingValue} onChange={handleChange}/>
        </Stack>
        <form>
            <textarea name="" id="" cols="30" rows="10" />
            <Button type="submit" variant="contained" color="primary" size="large" >Sign Up</Button>
        </form>
        <h2></h2>
        <p>rating start mui</p>
        <p></p>
      </div>
      <ToastContainer /> {/*you can also style this toast container component if you want it to affect all the toast alerts in this component (unless you then style that alert seperately) */}
    </div>
  )
}

export default MovieDetails
