import React from 'react'
import Props from './Props'
import Navbar from './Navbar'


export default function Benez() {
  const data = [
    {
      imageSrc :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6eU3HL7MW_O5OzN8mpKacOQGkAe_8kuWsA&s' ,
      Make : 'Benz',
      Content: 'Mercedes-Benz, commonly referred to simply as Mercedes and occasionally as Benz, is a German luxury and commercial vehicle brand that was founded in 1926. Mercedes-Benz AG is based in Stuttgart, Baden-Württemberg, Germany.',
      Model: 'E200',
      Price: '35,00,000'
    },
    {
      imageSrc : 'https://www.ccarprice.com/products/Mercedes-Benz-CLA-Class-CLA-250-2020_1.jpg',
      Make : 'Benz',
      Content: 'Mercedes-Benz, commonly referred to simply as Mercedes and occasionally as Benz, is a German luxury and commercial vehicle brand that was founded in 1926. Mercedes-Benz AG is based in Stuttgart, Baden-Württemberg, Germany.',
      Model: 'G-Class',
      Price: '30,00,000'
    },
    {
      imageSrc : 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy/auto-client/eecb4849b30914b11bf1f5b377cd9fa8/g_500.png',
      Make : 'Benz',
      Content: 'Mercedes-Benz, commonly referred to simply as Mercedes and occasionally as Benz, is a German luxury and commercial vehicle brand that was founded in 1926. Mercedes-Benz AG is based in Stuttgart, Baden-Württemberg, Germany.',
      Model: 'Z-Prime',
      Price: '28,00,000'
    },
    {
      imageSrc : '',
      Make : 'Benz',
      Content: 'Mercedes-Benz, commonly referred to simply as Mercedes and occasionally as Benz, is a German luxury and commercial vehicle brand that was founded in 1926. Mercedes-Benz AG is based in Stuttgart, Baden-Württemberg, Germany.',
      Model: '',
      Price: ''
    },
    {
      imageSrc : '',
      Make : 'Benz',
      Content: 'Mercedes-Benz, commonly referred to simply as Mercedes and occasionally as Benz, is a German luxury and commercial vehicle brand that was founded in 1926. Mercedes-Benz AG is based in Stuttgart, Baden-Württemberg, Germany.',
      Model: '',
      Price: ''
    }

  ]
   
  
  return (
    <div>
    <Navbar page = 'Benez'/>
    <h1>Benz</h1>
    <Props object={data} />
    
      
    </div>
  )
}
