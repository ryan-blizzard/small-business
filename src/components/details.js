import React from 'react'

export default function Details(props) {
  let shop = props.business.find(item => item.id == props.match.params.id)
  
  return (
    <div>
      
      <div className = "details">
      <h1>{shop.Name}</h1>
      <h2>{shop.address}</h2>
      <h2>{shop.hours}</h2>
      <p>{shop.description}</p>
    </div>
      
    </div>
  )
}
