import React from 'react'

const ConfirmedRide = (props) => {
    return (
        <div>
            <h5
                onClick={() => { props.setConfirmedRidePanel(false) }}
                className='p-1 text-center w-[93%] absolute top-0' >
                <i className='text-xl text-gray-400 ri-arrow-down-wide-line'></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex flex-col gap-2 justify-between items-center'>
                <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />

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

                <button onClick={() => { props.setVehicleFound(true); props.setConfirmedRidePanel(false) }}
                    className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg '>Confirm</button>
            </div>

        </div>
    )
}

export default ConfirmedRide
