import React, { useEffect, useState } from 'react'
import "/src/Components/Latestmovies/Latestmovies.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox'
import Footer from '../Footer/Footer'

const apikey = import.meta.env.VITE_OMDB_API_KEY;


const SearchedMovie = () => {

    const { name } = useParams();
     console.log("Movies : ", name)

    const [searchedmoviesData , setSerchedMoviesData] = useState([]);

    const searchedMovies = async () => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${name}`);
    if (response.data.Response === "True") {
        setSerchedMoviesData(response.data.Search);
    } else {
        setSerchedMoviesData([]);
    }
};


    useEffect(() => {
        searchedMovies();
    }, [name]);

  return (
    <div style={{paddingTop:"80px"}}>
        <div className='d-block d-md-none'><SearchBox/></div>
        <div className="container-fluid mt-3">

            <div className='latestmovies-container d-flex justify-content-start gap-3 flex-wrap'>
                {
                    searchedmoviesData.map((film) => {
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

export default SearchedMovie