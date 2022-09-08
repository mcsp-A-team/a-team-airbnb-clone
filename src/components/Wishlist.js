import React, { useEffect } from 'react'
import axios from 'axios'
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export default function Wishlist({ wishlist }) {

   useEffect(() => {
    for (let i = 0; i < wishlist.length; i++) {

        axios.get(`${API_ENDPOINT}/homes/${wishlist[i]}`).then((res) => {
            console.log(res.data)
        })
    }
   })
    
  return (
    <div>Wishlist</div>
  )
}
