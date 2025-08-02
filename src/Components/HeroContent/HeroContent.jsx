import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '/src/Components/HeroContent/HeroContent.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const apikey = import.meta.env.VITE_OMDB_API_KEY;

const HeroContent = () => {

    const [movieinfo1, setMovieInfo1] = useState([]);
    const [movieinfo2, setMovieInfo2] = useState([]);
    const [movieinfo3, setMovieInfo3] = useState([]);

    const movieContainer1 = async () => {
        const data = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&i=tt37455270`)
        setMovieInfo1(data.data)
    }
    const movieContainer2 = async () => {
        const data = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&i=tt18923754`)
        setMovieInfo2(data.data)
    }
    const movieContainer3 = async () => {
        const data = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&i=tt14513804`)
        setMovieInfo3(data.data)
    }

    useEffect(() => {
        movieContainer1();
        movieContainer2();
        movieContainer3();
    }, []);
    return (
        <div>
            <div className="carousel slide" id='carousel' data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type='button' data-bs-target="#carousel" data-bs-slide-to="0" className='active'></button>
                    <button type='button' data-bs-target="#carousel" data-bs-slide-to="1"></button>
                    <button type='button' data-bs-target="#carousel" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/6803.jpg" alt="" className='d-none d-md-block w-100' />
                        <img src="https://wallpapercave.com/wp/wp15526054.jpg" alt="" className='d-block d-md-none w-100' style={{ height: "70vh" }} />

                        <div className='container w-100 d-flex justify-content-center carousel-detail-frame' style={{marginTop:"100px"}}>
                            {
                                    movieinfo1 && (
                                    <div className='d-flex justify-content-around col-12 p-5 flex-wrap' style={{background:"#250303c7"}}>
                                        <img src={movieinfo1.Poster} alt="" className='col-12 col-md-3 carousel-detail-img'/>
                                        <div className='right-content text-white d-flex flex-column col-8 col-md-5'>
                                            <span className='fs-4 mt-2'>Title : {movieinfo1.Title}</span>
                                            <span className='fs-4 mt-2'>Year : {movieinfo1.Year}</span>
                                            <span className='fs-4 mt-2'>Relesed : {movieinfo1.Released}</span>
                                            <span className='fs-4 mt-2'>Runtime : {movieinfo1.Runtime}</span>
                                            <span className='fs-4 mt-2'>Genere : {movieinfo1.Genre}</span>
                                            <span className='fs-4 mt-2'>Director : {movieinfo1.Director}</span>
                                            <span className='fs-4 mt-2'>Country : {movieinfo1.Country}</span>
                                            <span className='fs-4 mt-2'>Actors : {movieinfo1.Actors}</span>
                                            <span className='fs-4 mt-2'>Language : {movieinfo1.Language}</span>
                                            <span className='fs-4 mt-2'>ImdbRating : {movieinfo1.imdbRating}</span>
                                            <span className='fs-4 mt-2'>Awards : {movieinfo1.Awards}</span>
                                        </div>
                                    </div>
                                )

                            }
                        </div>
                    </div>


                    <div className="carousel-item" data-bs-interval="10000">
                        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/22298.jpg" alt="" className='d-none d-md-block w-100 carousel-img' />
                        <img src="https://wallpapercave.com/wp/wp14971241.webp" alt="" className='d-block d-md-none w-100 carousel-img' style={{ height: "70vh" }} />

                        <div className='container w-100 d-flex justify-content-center carousel-detail-frame' style={{marginTop:"100px"}}>
                            {
                                    movieinfo2 && (
                                    <div className='d-flex justify-content-around col-12 p-5 flex-wrap' style={{background:"#250303c7"}}>
                                        <img src={movieinfo2.Poster} alt="" className='col-12 col-md-3 carousel-detail-img'/>
                                        <div className='right-content text-white d-flex flex-column col-8 col-md-5'>
                                            <span className='fs-4 mt-2'>Title : {movieinfo2.Title}</span>
                                            <span className='fs-4 mt-2'>Year : {movieinfo2.Year}</span>
                                            <span className='fs-4 mt-2'>Relesed : {movieinfo2.Released}</span>
                                            <span className='fs-4 mt-2'>Runtime : {movieinfo2.Runtime}</span>
                                            <span className='fs-4 mt-2'>Genere : {movieinfo2.Genre}</span>
                                            <span className='fs-4 mt-2'>Director : {movieinfo2.Director}</span>
                                            <span className='fs-4 mt-2'>Country : {movieinfo2.Country}</span>
                                            <span className='fs-4 mt-2'>Actors : {movieinfo2.Actors}</span>
                                            <span className='fs-4 mt-2'>Language : {movieinfo2.Language}</span>
                                            <span className='fs-4 mt-2'>ImdbRating : {movieinfo2.imdbRating}</span>
                                            <span className='fs-4 mt-2'>Awards : {movieinfo2.Awards}</span>
                                        </div>
                                    </div>
                                )

                            }
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src="https://wallpapercave.com/wp/wp15110730.webp" alt="" className='d-none d-md-block w-100' />
                        <img src="https://wallpapercave.com/wp/wp15008749.webp" alt="" className='d-block d-md-none w-100' style={{ height: "70vh" }} />

                        <div className='container w-100 d-flex justify-content-center carousel-detail-frame' style={{marginTop:"100px"}}>
                            {
                                    movieinfo3 && (
                                    <div className='d-flex justify-content-around col-12 p-5 flex-wrap' style={{background:"#250303c7"}}>
                                        <img src={movieinfo3.Poster} alt="" className='col-12 col-md-3 carousel-detail-img'/>
                                        <div className='right-content text-white d-flex flex-column col-8 col-md-5'>
                                            <span className='fs-4 mt-2'>Title : {movieinfo3.Title}</span>
                                            <span className='fs-4 mt-2'>Year : {movieinfo3.Year}</span>
                                            <span className='fs-4 mt-2'>Relesed : {movieinfo3.Released}</span>
                                            <span className='fs-4 mt-2'>Runtime : {movieinfo3.Runtime}</span>
                                            <span className='fs-4 mt-2'>Genere : {movieinfo3.Genre}</span>
                                            <span className='fs-4 mt-2'>Director : {movieinfo3.Director}</span>
                                            <span className='fs-4 mt-2'>Country : {movieinfo3.Country}</span>
                                            <span className='fs-4 mt-2'>Actors : {movieinfo3.Actors}</span>
                                            <span className='fs-4 mt-2'>Language : {movieinfo3.Language}</span>
                                            <span className='fs-4 mt-2'>ImdbRating : {movieinfo3.imdbRating}</span>
                                            <span className='fs-4 mt-2'>Awards : {movieinfo3.Awards}</span>
                                        </div>
                                    </div>
                                )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroContent