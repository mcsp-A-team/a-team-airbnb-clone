import React, { useEffect } from 'react'
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

export default function Wishlist({ wishlist }) {

   useEffect(() => {
    for (let i = 0; i < wishlist.length; i++) {

        axios.get(`${API_URL}/homes/${wishlist[i]}`).then((res) => {
            console.log(res.data)
        })
    }
   })
    
  return (
    <div>Wishlist</div>
  )
}
