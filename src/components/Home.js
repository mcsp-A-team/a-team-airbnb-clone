import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomePreview from './HomePreview';

export default function Home() {

  const [currentHomes, setCurrentHomes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/homes').then(res => {
            for (let i = 0; i < res.data.length; i++) {
              setCurrentHomes(prevCurrentHomes => [...prevCurrentHomes, res.data])
            }
        })
    }, [])

  return (
    <div>
      <p>Here</p>
      {currentHomes.map((currentHomes) => <HomePreview city={currentHomes.city} state={currentHomes.state} />)}
    </div>
  )
}
