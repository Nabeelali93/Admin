import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Phone from '../Components/AddPost'
import Donation from '../Components/Donation'
import Request from '../Components/Request'
import Order from '../Components/Order'
import Videos from '../Components/AddVideo'
import Login from '../Components/Login'

function Navegation() {
  return (
    <div>
     <Routes>
         <Route path='/' element={<Login/>}></Route>
        <Route path='/AddPost' element={<Phone/>}></Route>
        <Route path='/AddVideo' element={<Videos/>}></Route>

        {/* <Route path='/Oders' element={<Oders/>}></Route> */}
        <Route path='/Donation' element={<Donation/>}></Route>
        <Route path='/Request' element={<Request/>}></Route>
        <Route path='/order' element={<Order/>}></Route>




        </Routes> 

    </div>
  )
}

export default Navegation

