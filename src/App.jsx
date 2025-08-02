import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import HeroContent from './Components/HeroContent/HeroContent'
import Latestmovies from './Components/Latestmovies/Latestmovies'
import Latestseries from './Components/Latestseries/Latestseries'
import Anime from './Components/Anime/Anime'
import Details from './Components/DetailsContainer/Details'
import SearchedMovie from './Components/SearchedMovie/SearchedMovie'
import Action from './Pages/Action/Action'
import Comedy from './Pages/Comedy/Comedy'
import Thriller from './Pages/Thriller/Thriller'
import Romance from './Pages/Romance/Romance'
import Mystery from './Pages/Mystery/Mystery'
import SearchBox from './Components/SearchBox/SearchBox'
import Footer from './Components/Footer/Footer'

const App = () => {

  const Homepage = () => {
    return(
      <>
      <HeroContent/>
      <SearchBox/>
      <Latestmovies/>
      <Latestseries/>
      <Anime/>
      <Footer/>
      </>
    )
  }
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/movies/:name' element={<Latestmovies/>}/>
          <Route path='/series' element={<Latestseries/>}/>
          <Route path='/anime' element={<Anime/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/searchedmovie/:name' element={<SearchedMovie/>}/>
          <Route path='/action' element={<Action/>}/>
          <Route path='/comedy' element={<Comedy/>}/>
          <Route path='/thriller' element={<Thriller/>}/>
          <Route path='/romance' element={<Romance/>}/>
          <Route path='/mystery' element={<Mystery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App