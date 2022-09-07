import React, { useEffect } from 'react'
import axios from 'axios'

export default function Wishlist({ wishlist }) {

   useEffect(() => {
    for (let i = 0; i < wishlist.length; i++) {

        axios.get(`/homes/${wishlist[i]}`).then((res) => {
            console.log(res.data)
        })
    }
   })
    
  return (
    <div>Wishlist</div>
  )
}
