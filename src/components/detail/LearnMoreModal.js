import React from "react";

export default function LearnMoreModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="text-black active:bg-pink-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Learn more
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <p>
                    <h1 className="mr-1 font-semibold">AirCover </h1> is
                    comprehensive protection included for free with every
                    booking.
                  </p>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <h4>Booking Protection Guarantee</h4>
                  <p>
                    In the unlikely event a Host needs to cancel your booking
                    within 30 days of check-in, we’ll find you a similar or
                    better home, or we’ll refund you.
                  </p>
                  <h4>Get-What-You-Booked Guarantee</h4>
                  <p>
                    If at any time during your stay you find your listing isn't
                    as advertised—for example, the refrigerator stops working
                    and your Host can’t easily fix it, or it has fewer bedrooms
                    than listed—you'll have three days to report it and we’ll
                    find you a similar or better home, or we’ll refund you.
                  </p>
                  <h4>Check-In Guarantee</h4>
                  <p>
                    If you can’t check into your home and the Host cannot
                    resolve the issue, we’ll find you a similar or better home
                    for the length of your original stay, or we’ll refund you.
                  </p>
                  <h4>24-hour Safety Line</h4>
                  <p>
                    If you ever feel unsafe, you’ll get priority access to
                    specially-trained safety agents, day or night.
                  </p>
                  <p>
                    Find complete details on how AirCover protects your booking
                    in our{" "}
                    <a
                      href="https://www.airbnb.com/help/article/3218/getting-protected-through-aircover"
                      className="ml-1 font-semibold underline"
                    >
                      Help Center
                    </a>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-pink-500 background-transparent hover:shadow-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
