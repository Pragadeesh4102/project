import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useActionData } from 'react-router-dom'
import Usefetch from '../Hooks/Usefetch'


export default function Post() {
const [name,setname] = useState('')
const [email,setemail] = useState('')
const [phone,setphone] = useState(0)

function send(){
  axios.post('https://66e580d15cc7f9b6273d8506.mockapi.io/crud',{
    name:name,
    email:email,
    phone:phone
  }).then(()=>{
    alert('success');
    window.location = '/get'
  })
  .catch(err=>console.log(err))
  
}


  return (
    <div className="">
      <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
      <label>name</label>

      <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
      <label >email</label>

      <input type="number" value={phone} onChange={(e)=>{setphone(e.target.value)}} />
      <label>phone</label>

      <button onClick={send}>enter</button>
    </div>  
  )
}
