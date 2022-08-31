import React from 'react'

export default function FooterPopup({ footerPopup }) {
    if (footerPopup) {
        return (
            <div className='flex w-full justify-between px-16 absolute bottom-0 mb-10 text-sm'>
                <div className='flex flex-col space-y-4'>
                    <p className='font-bold'>Support</p>
                    <a href={'#'}>Help Center</a>
                    <a href={'#'}>AirCover</a>
                    <a href={'#'}>Safety information</a>
                    <a href={'#'}>Supporting people with disabilities</a>
                    <a href={'#'}>Cancellation options</a>
                    <a href={'#'}>Our COVID-19 Response</a>
                    <a href={'#'}>Report a neighborhood concern</a>
                </div>
                <div className='flex flex-col space-y-4'>
                    <p className='font-bold'>Community</p>
                    <a href={'#'}>Airbnb.org: disaster relief housing</a>
                    <a href={'#'}>Suppport Afghan refugees</a>
                    <a href={'#'}>Combating discrimination</a>
                </div>
                <div className='flex flex-col space-y-4'>
                    <p className='font-bold'>Hosting</p>
                    <a href={'#'}>Try hosting</a>
                    <a href={'#'}>AirCover for Hosts</a>
                    <a href={'#'}>Exploring hosting resources</a>
                    <a href={'#'}>Visit our community forum</a>
                    <a href={'#'}>How to host resonsibly</a>
                </div>
                <div className='flex flex-col space-y-4'>
                    <p className='font-bold'>Airbnb</p>
                    <a href={'#'}>Newsroom</a>
                    <a href={'#'}>Learn about new features</a>
                    <a href={'#'}>Letter from our founders</a>
                    <a href={'#'}>Careers</a>
                    <a href={'#'}>Investors</a>
                    <a href={'#'}>Gift cards</a>
                </div>
                
            </div>
          )
    }
  
}
