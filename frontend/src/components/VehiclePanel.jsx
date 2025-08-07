import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5
                onClick={() => { props.setVehiclePanelOpen(false) }}
                className='p-1 text-center w-[93%] absolute top-0' >
                <i className='text-xl text-gray-400 ri-arrow-down-wide-line'></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={() => { props.setConfirmedRidePanel(true) }}
                className='flex border-2 active:bg-gray-100 active:border-black  rounded-xl w-full p-3 mb-2 items-center justify-between'>
                <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹189.20</h2>
            </div>

            <div onClick={() => { props.setConfirmedRidePanel(true) }}
                className='flex w-full border-2 active:bg-gray-100 active:border-black rounded-xl p-3 mb-2 items-center justify-between'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Motorbike <span><i className='ri-user-3-fill'></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, bike rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹109.20</h2>
            </div>

            <div onClick={() => { props.setConfirmedRidePanel(true) }}
                className='flex w-full border-2 active:bg-gray-100 active:border-black rounded-xl p-3 mb-2 items-center justify-between'>
                <img className='h-12' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto <span><i className='ri-user-3-fill'></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹132.20</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
