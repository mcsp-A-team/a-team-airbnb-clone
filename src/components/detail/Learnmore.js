import React from 'react'

function Learnmore({closeLearnMore}) {
  return (
    <div className="learnmore-modal">
      {/* <button
        //   href="http://localhost:3000/housedetail/"
          class="close-learnmore-button"
          onClick={() => closeLearnMore(false)}
        > Less...
        </button> */}
        <div className="learnmore-title">  
          <p><h1>AirCover </h1> is comprehensive protection included for free with every booking.</p>
        </div>
        <div className="house-detail-des-divider"></div>
      <div className="learnmore-container">
        <div className="learnmore-container-left">
        <h4>Booking Protection Guarantee</h4>
        <p>In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.</p>
        <h4>Get-What-You-Booked Guarantee</h4>
        <p>If at any time during your stay you find your listing isn't as advertised—for example, the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed—you'll have three days to report it and we’ll find you a similar or better home, or we’ll refund you.</p>
        </div>
        <div className="learnmore-container-right">
        <h4>Check-In Guarantee</h4>
        <p>If you can’t check into your home and the Host cannot resolve the issue, we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.</p>
        <h4>24-hour Safety Line</h4>
        <p>If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.</p>
        </div>
      </div>
        <div className='learnmore-container-footer'>
        <p>Find complete details on how AirCover protects your booking in our <a href="https://www.airbnb.com/help/article/3218/getting-protected-through-aircover" class="_1sikdxcl">Help Center</a></p>
        </div>
        <button
        //   href="http://localhost:3000/housedetail/"
          class="close-learnmore-button"
          onClick={() => closeLearnMore(false)}
        > Less...
        </button>
    </div>
  )
}

export default Learnmore