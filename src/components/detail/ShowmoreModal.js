import React from "react";

export default function ShowmoreModal() {
  const [showMoreModal, setShowMoreModal] = React.useState(false);
  return (
    <>
      <button
        className="text-black active:bg-pink-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowMoreModal(true)}
      >
        Learn more
      </button>
      {showMoreModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t flex flex-col">
                  <h1 className="mr-1 font-semibold"> About this space </h1>
                  <p>
                    You can rest assured we've put in place extensive cleaning
                    and disinfecting procedures including new policies with
                    increased focus on sanitizing all commonly touched surfaces
                    before and after every stay. Look no more. You've found the
                    perfect rental! Come stay with us and experience firsthand
                    why our guests rave about our properties and love our
                    customer service.
                  </p>
                  <p>
                    Step away from the hustle and bustle, and experience the
                    rugged, natural beauty of the surrounding hill country and
                    lake.
                  </p>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <h3>The space</h3>
          <p>
            With a pool at your back door and stunning lake views inside and
            out, this well-appointed waterfront home has practically everything
            you need for a relaxing lake getaway and a refreshing
            change-of-scenery, including:
          </p>
          <p>📺 Living Area 📺</p>
          <p>‣ Two large couches</p>
          <p>🍽️ Dining Area 🍽️</p>
          <p>‣ Table for fourteen</p>
          <p>☕ Kitchen ☕</p>
          <p>‣ Breakfast table for six and four bar stools</p>
          <p>☀️ Sunroom ☀️</p>
          <p>‣ More gorgeous lake views</p>
          <p>🛌 Master Bedroom Downstairs 🛌</p>
          <p>‣ King bed with private balcony area with lake views inside and out</p>
          <p>🛌 Guest Bedroom 2 Downstairs And 3 Upstairs 🛌</p>
          <p>‣ Queen bed with luxurious linens</p>
          <h3>Guest access</h3>
          <p>
            This listing includes the entire house. You'll have access to the
            entire property and garage with these exceptions: One small pantry,
            a linen closet, one of the two master bedroom closets, and a garage
            closet are locked; the covered dock/boat lift is for owner access
            only.
          </p>
          <h3>Other things to note</h3>
          <p>
            Please remember to treat the space with respect. If any problems
            arise, we will do our best to take action ASAP but there is no one
            living on site 24/7.
          </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-pink-500 background-transparent hover:shadow-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowMoreModal(false)}
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
