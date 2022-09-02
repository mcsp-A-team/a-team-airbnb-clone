import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomePreview from './HomePreview';
import { v4 } from 'uuid'

export default function Home() {

  const [currentHomes, setCurrentHomes] = useState([]);

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
    <div className='flex flex-wrap justify-evenly items-center mx-12'>
      {currentHomes.map((currentHomes) => <HomePreview key={v4()} city={currentHomes.city} state={currentHomes.state}/>)}
    </div>
  )
}
