import React from 'react'
import Props from './Props'
import Navbar from './Navbar'


export default function Audi() {
  
  const data = [
    {
      imageSrc: ' https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz41r_tPYe1rLFt99KiRQZi_O2hdiwcAK1MWoDSSYa4AE31sgwcnLACZB5vWBiBoQn8mSmYGBtQLIiGQAAT6-0qKcgsSixFy98syUkgxBDQMigTC7i2uIo6dPMADwCSdO6QAAAA',
      Make:'Audi',
      Content:"Audi car price starts at Rs 44.25 Lakh for the cheapest model which is Q3 and the price of most expensive model, which is RS Q8 starts at Rs 2.22 Crore.",
      Model:' Audi A4',
      Price:'20,00,000 ',
      },
      {
        imageSrc: ' https://uploads.audi-mediacenter.com/system/production/car_families/23/photos/98fd31795e391b05fb2914598361e1267086c038/web_1440_A8.jpg?1710839769',
        Make:'Audi',
        Content:"Audi car price starts at Rs 44.25 Lakh for the cheapest model which is Q3 and the price of most expensive model, which is RS Q8 starts at Rs 2.22 Crore.",
        Model:' Audi 78',
        Price:'40,00,000 ',
        },
      {
        imageSrc: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPARRwZPbnrQdK-UmUJGs0nbZ0C-S3EQRLQ&s',
        Make:'Audi',
        Content:"Audi car price starts at Rs 44.25 Lakh for the cheapest model which is Q3 and the price of most expensive model, which is RS Q8 starts at Rs 2.22 Crore.",
        Model:'Audi A5 ',
        Price:'23,00,000 ',
        },
        {
          imageSrc: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grzwSWC7XPNk9YO-lHtbAx79ye33EdrxhYgboYtYAEcyGQ4HsDJDiVGMAkyLwCEJEA4jM5MTMwsFYAGZEMICCoYUAkEGZ3cQ1x9PQJBgASieoX2QAAAA?wid=850',
          Make:'Audi',
          Content:"Audi car price starts at Rs 44.25 Lakh for the cheapest model which is Q3 and the price of most expensive model, which is RS Q8 starts at Rs 2.22 Crore.",
          Model:'Audi Q7 ',
          Price:' 22,00,000',
          },
          {
            imageSrc: ' https://uploads.audi-mediacenter.com/system/production/car_families/84/photos/451d91edddcd5fd7905e60bc139ef916b4a13e7f/web_1440_Q6_e-tron.png?1710785494',
            Make:'Audi',
            Content:"Audi car price starts at Rs 44.25 Lakh for the cheapest model which is Q3 and the price of most expensive model, which is RS Q8 starts at Rs 2.22 Crore.",
            Model:'Audi RS 7 ',
            Price:'18,00,000 ',
            }
  ]
  return (
    <div>
      <Navbar page = 'Audi'/>
      <h1>Audi</h1>
    <Props object={data} />
    </div>
  )
}
