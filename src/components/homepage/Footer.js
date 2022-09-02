import React, { useState } from 'react'
import globe from '../../assets/Globe_icon.svg'
import FooterPopup from './FooterPopup'

export default function Footer() {

    const [footerPopup, setFooterPopup] = useState(false);

    const handleFooterPopup = () => {
        setFooterPopup(footerPopup => !footerPopup)
    }

  return (
    <>
    <footer className='flex fixed bg-white bottom-0 border-t-1 border-solid border-gray-500 w-full h-12 text-sm justify-between p-4 px-20 my-auto items-center'>
        <ul className='flex space-x-3 text-gray-600'>
            <li>
                &copy; 2022 Airbnb, Inc.  
            </li>
            <li>
                ·
            </li>
            <li>
                <a className='hover:underline' href={'#'}>Privacy </a>
            </li>
            <li>
                ·
            </li>
            <li>
            <a className='hover:underline' href={'#'}>Terms </a>
            </li>
            <li>
                ·
            </li>
            <li>
            <a className='hover:underline' href={'#'}>Sitemap </a>
            </li>
            <li>
                ·
            </li>
            <li>
            <a className='hover:underline' href={'#'}>Destinations </a>
            </li>            
        </ul>
        <ul className='flex font-semibold items-center space-x-3'>
            <li className='flex space-x-2'>
                <img className='w-4 h-4' src={globe} />
                <a href={'#'}><p className='hover:underline' >English (US)</p></a>
            </li>
            <li className='flex'>
                <p>$&nbsp;</p>
                <a href={'#'} className='hover:underline'>USD</a>
            </li>
            <li>
                <a href={'#'} className='hover:underline'>Support & resources</a>
            </li>
            <li>
                <button onClick={() => handleFooterPopup()} >&#94;</button>
            </li>
        </ul>
    </footer>
    <FooterPopup footerPopup={footerPopup} />
    </>
  )
}
