import React, { useEffect, useState } from 'react'
import "/src/Components/Latestmovies/Latestmovies.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'


const Comedy = () => {

    const [comedyMovies , setComedyMovies] = useState([]);
    // console.log("Latest : ", latestmoviesData)

    const comedymoviedata = async () => {
        const data = await axios.get("https://www.omdbapi.com/?apikey=33acb252&s=welcome")
        setComedyMovies(data.data.Search);
    }

    useEffect(() => {
        comedymoviedata();
    }, []);

  return (
    <div>
        <div className="container-fluid" style={{paddingTop:"80px"}}>
            <h1 className='text-white'>Best Movies</h1>

            <div className='latestmovies-container d-flex justify-content-start gap-3 flex-wrap'>
                {
                    comedyMovies.map((film) => {
                        return(
                            <div key={film.imdbID} className='m-md-2 mt-md-1'>
                                <figure style={{width:"250px" , height:"400px"}} className='bg-white p-2 rounded latestMovies'>
                                    <NavLink to={`/details/${film.imdbID}`}>
                                        <img src={film.Poster} alt="" style={{height:"80%", width:"100%"}} />
                                    </NavLink>
                                    <figcaption>{film.Title}</figcaption>
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Comedy