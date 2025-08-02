import React, { useEffect, useState } from 'react'
// import "/src/Components/Latestseries/Latestseries.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Anime = () => {

    const [latestAnimeData, setLatestAnimeData] = useState([]);
    // console.log("Latest : ", latestmoviesData)

    const latestanime = async () => {
        const data = await axios.get("https://www.omdbapi.com/?apikey=33acb252&s=kung fu panda")
        setLatestAnimeData(data.data.Search);
    }

    useEffect(() => {
        latestanime();
    }, []);
    return (
        <div>
            <div className="container-fluid" style={{ paddingTop: "80px" }}>
                <h1 className='text-white'>Best Anime</h1>

                <div className='latestmovies-container d-flex justify-content-start gap-3 flex-wrap'>
                    {
                        latestAnimeData.slice(1, 7).map((film) => {
                            return (
                                <div key={film.imdbID} className='m-md-2 mt-md-5'>
                                    <figure style={{ width: "250px", height: "400px" }} className='bg-white p-2 rounded latestMovies'>
                                        <NavLink to={`/details/${film.imdbID}`}>
                                            <img src={film.Poster} alt="" style={{ height: "80%", width: "100%" }} />
                                        </NavLink>
                                        <figcaption>{film.Title}</figcaption>
                                    </figure>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Anime