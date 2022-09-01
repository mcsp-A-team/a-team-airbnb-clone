import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomePreview from './HomePreview';

export default function Home() {

  const [currentHomes, setCurrentHomes] = useState([]);
  const [randomPicture, setRandomPicture] = useState()

    useEffect(() => {
        axios.get('http://localhost:3004/homes').then(res => {
            for (let i = 0; i < res.data.length; i++) {
              setCurrentHomes(prevCurrentHomes => [...prevCurrentHomes, res.data[i]])
            }
        })
    }, [])

    // useEffect(() => {
    //     console.log(res)
    //     setRandomPicture(res.data)
    //   })
    // }, [])

  return (
    <div className='flex flex-wrap justify-evenly items-center'>
      {currentHomes.map((currentHomes) => <HomePreview city={currentHomes.city} state={currentHomes.state}  picture={randomPicture}/>)}
    </div>
  )
}
