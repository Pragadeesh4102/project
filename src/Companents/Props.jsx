import React from 'react'


export default function Props(Props){
  const data = Props.object
  return (
    <div className='d-flex mt-5 p-5'>
      {
        data.map(items =>(
          
            <div className="card" style={{ width: '18rem' }}>
              <img src={items.imageSrc} className="card-img-top center" width={200} height={150} alt="no" />
              <div className="card-body">
                <h5 className="card-title">Make:{items.Make}</h5>
                <p className="card-text">Content:{items.Content}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Model: {items.Model}</li>
                <li className="list-group-item">Price: {items.Price}</li>
              </ul>
            </div>         
        ))
}
    </div>
  )
}
