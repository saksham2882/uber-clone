import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopup = (props) => {
    const [otp, setOtp] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h5
                onClick={() => { props.setConfirmRidePopupPanel(false) }}
                className='p-1 text-center w-[93%] absolute top-0' >
                <i className='text-xl text-gray-400 ri-arrow-down-wide-line'></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>

            <div className='flex items-center justify-between p-3 bg-yellow-200 rounded-lg  mt-4'>
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

                <div className='mt-6 w-full'>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <input
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className='bg-[#eee] px-6 py-4 text-lg rounded-lg w-full mt-3'
                            type="number" placeholder='Enter OTP'
                        />
                        <Link to={'/captain-riding'} className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg '>Confirm</Link>

                        <button
                            onClick={() => { props.setConfirmRidePopupPanel(false); props.setRidePopupPanel(false) }}
                            className='w-full mt-3 bg-red-600 text-white text-lg font-semibold p-3 rounded-lg '>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopup
