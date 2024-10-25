import React, { useContext,useRef } from 'react'
// import { Items } from './Hooks/UseContext'
import Navbar from './Navbar'

export default function Home() {
  // const animals = useContext(Items)
  // console.log(animals.birds)

  // const divref = useRef()
  // console.log(divref.current)
  
    // <div>
    //   <div className='w-50' style={{ height: "450px", border:"solid indigo 10px", marginLeft: "250px", marginTop: "50px", backgroundColor: "#0dcaf0", }}>
    //   <h1>WELCOME TO THE CAR WORLD....</h1>
    //   <h2>Explore the World</h2>
    //   <h2>Enjoy the Journey </h2>
    //   <div className='d-flex'>
    //     <ul>
    //       <li>Tata</li>
    //       <li>Hundai</li>
    //       <li>Suzuki</li>
    //       <li>Benez</li>
    //       <li>Audi</li>
    //     </ul>
    //   </div>
    //   <h2>WORK  RIDE ENJOY</h2>
    // </div>
    // </div> 
    return ( 
    <div>
      <Navbar page = 'Home'/>
      
      {/* <h1 ref={divref}>Home</h1> */}
    </div>
  )
}

