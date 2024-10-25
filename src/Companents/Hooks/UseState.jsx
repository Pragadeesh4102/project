import React, {useState} from 'react'

export default function UseState() {
    const [Name, setName] = useState("______")
    const [Course,setCourse] = useState("______")
    const [Date, setDate] = useState("_____")
  return (
    <div>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(e) => {setName(e.target.value)}} />
        <label htmlFor="">Course Name:</label>
        <input type="text" onChange={(e1) => {setCourse(e1.target.value)}} />
        <label htmlFor="">Date:</label>
        <input type="date" onChange={(e2) => {setDate(e2.target.value)}}/>

        <div className='w-50' style={{height:"450px", border:"solid yellow 10px", marginLeft:"250px",marginTop:"50px",backgroundColor:"#f78300",}}>
            <h1 id='Name' className='mt-3' style={{ textDecoration:"underline"}}>CERTFICATE OF ACHIVEMENT</h1>
            <p className='fs-3'>This Certficate is Awarded to <h1>{Name}</h1>If Recogination of Outstanding Performance in <h1>{Course}</h1></p>
            <h3>Date: <h1>{Date}</h1></h3>
            <h4>CONGRATULATIONS...</h4>
        </div>
    </div>
  );
}
