import React, { useState } from 'react'
import globe from '../assets/Globe_icon.svg'
import FooterPopup from './FooterPopup'

export default function Footer() {

    const [footerPopup, setFooterPopup] = useState(false);

    const handleFooterPopup = () => {
        setFooterPopup(footerPopup => !footerPopup)
    }

  return (
    <>
    <footer className='flex fixed bottom-0 border-t-1 border-solid border-gray-500 w-full h-12 text-sm justify-between p-4 px-8 items-center bg-white'>
        <ul className='flex space-x-3 text-gray-600'>
            <li>
                Developers:
            </li>
            <li>
                <a href={'https://www.linkedin.com/in/kevinreavesjr/'} alt={'Kevin Reaves Linkedin'}>Kevin Reaves</a>
            </li>
            <li>
                ·
            </li>
            <li>
            <a href={'https://www.linkedin.com/in/hung-nguyen-a541a6224/'} alt={'Hung Nguyen Linkedin'}>Hung Nguyen</a>
            </li>
            <li>
                ·
            </li>
            <li>
            <a href={'https://www.linkedin.com/in/thanh-huy-le-209635242/'} alt={'Thanh Huy Le Linkedin'}>Thanh Huy Le</a>
            </li>
            <li>
                ·
            </li>
            <li>
            <a href={'www.linkedin.com/in/kyle-jones-847099232'} alt={'Kyle Jones Linkedin'}>Kyle Jones</a>
            </li>
            <li>
                ·
            </li>
            <li>
            <a href={'https://www.linkedin.com/in/matthew-d-rust/'} alt={'Matthew Rust Linkedin'}>Matthew Rust</a>
            </li>            
        </ul>
        <ul className='flex font-semibold items-center space-x-3'>
            <li className='flex space-x-2'>
                <img className='w-4 h-4' src={globe} />
                <p>English (US)</p>
            </li>
            <li>
                $ USD
            </li>
            <li className='hover:font-bold'>
                Support & resources
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
