import React, { useEffect, useState } from 'react'
import "/src/Components/Latestmovies/Latestmovies.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const apikey = import.meta.env.VITE_OMDB_API_KEY;

const Details = () => {

    const { id } = useParams();
    console.log("ID :", id)

    const [detailsData, setDetailsData] = useState([]);
    // console.log("Latest : ", latestmoviesData)

    const getMovie = async () => {
        const data = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
        setDetailsData(data.data);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <div className="container-fluid" style={{ paddingTop: "100px" }}>

                <div className='container w-100 d-flex justify-content-center'>
                    {
                        detailsData && (
                            <div className='d-flex justify-content-around col-12 flex-wrap'>
                                <div className='right-content col-12 col-md-3'>
                                    <img src={detailsData.Poster} alt="" className='col-12'/>
                                </div>
                                <div className="left-content col-12 col-md-6 d-flex flex-column">
                                            < span className = 'fs-4 mt-2 text-white' > Title : { detailsData.Title }</span >
                                            <span className='fs-4 mt-2 text-white'>Year : {detailsData.Year}</span>
                                            <span className='fs-4 mt-2 text-white'>Relesed : {detailsData.Released}</span>
                                            <span className='fs-4 mt-2 text-white'>Runtime : {detailsData.Runtime}</span>
                                            <span className='fs-4 mt-2 text-white'>Genere : {detailsData.Genre}</span>
                                            <span className='fs-4 mt-2 text-white'>Director : {detailsData.Director}</span>
                                            <span className='fs-4 mt-2 text-white'>Country : {detailsData.Country}</span>
                                            <span className='fs-4 mt-2 text-white'>Actors : {detailsData.Actors}</span>
                                            <span className='fs-4 mt-2 text-white'>Language : {detailsData.Language}</span>
                                            <span className='fs-4 mt-2 text-white'>ImdbRating : {detailsData.imdbRating}</span>
                                            <span className='fs-4 mt-2 text-white'>Awards : {detailsData.Awards}</span>
                                </div>
                            </div>
                        )

                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Details



                                            