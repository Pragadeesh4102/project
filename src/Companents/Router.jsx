import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import UseState from './Hooks/UseState'
import Hundai from './Hundai'
import Suzuki from './Suzuki'
import Audi from './Audi'
import Benez from './Benez'
import Tata from './Tata'
import UseReducer from './Hooks/UseReducer'
import Get from './Crud/Get'
import Post from './Crud/Post'
import List from './Crud1/List'

export default function Router() {
  return (
    <div>

      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/Tata' Component={Tata} />
        <Route path='/Hundai' Component={Hundai} />
        <Route path='/Suzuki' Component={Suzuki} />
        <Route path='/Benez' Component={Benez} />
        <Route path='/Audi' Component={Audi} />

        <Route path='/UseState' Component={UseState} />
        <Route path='/UseReducer' Component={UseReducer} />
        <Route path='/UseContext' Component={useContext} />
        <Route path='/get' element={<Get />} />
        <Route path='/post' element={<Post />} />
        <Route path='/list' element={<List />} />
      </Routes>

      {/* </BrowserRouter> */}
    </div>
  )
}
