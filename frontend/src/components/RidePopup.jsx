import React from 'react'

const RidePopup = (props) => {
    return (
        <div>
            <h5
                onClick={() => { props.setRidePopupPanel(false) }}
                className='p-1 text-center w-[93%] absolute top-0' >
                <i className='text-xl text-gray-400 ri-arrow-down-wide-line'></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

            <div className='flex items-center justify-between p-3 bg-yellow-200 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 rounded-full object-cover w-12' src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg" alt="" />
                    <h2 className='text-lg font-medium'>Rahul Yadav</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.6KM</h5>
            </div>

            <div className='flex flex-col gap-2 justify-between items-center'>

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className='text-lg ri-map-pin-user-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>627/23-B</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Block A, Road 12, New Delhi</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>627/23-B</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Block A, Road 12, New Delhi</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className='text-lg ri-currency-line'></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹189.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => { props.setConfirmRidePopupPanel(true) }}
                    className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg '>Accept</button>

                <button
                    onClick={() => { props.setRidePopupPanel(false) }}
                    className='w-full mt-1 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg '>Ignore</button>
            </div>
        </div >
    )
}

export default RidePopup
