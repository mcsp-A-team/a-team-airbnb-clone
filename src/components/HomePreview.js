import React from 'react'

export default function HomePreview({ city, state, picture }) {
    let miles = (Math.random()*100).toFixed(0)
    let price = (Math.random()*100).toFixed(0)

  return (
    <div className='m-2 flex flex-col items-start w-64'>
        <img className='w-48 h-48 rounded-lg' src="https://random.imagecdn.app/500/150" />
        <p className='font-semibold'>{city}, {state}</p>
        <p>{miles} miles</p>
        <p>Oct 3-8</p>
        <p className='font-semibold'>${price} night</p>


    </div>
  )
}
