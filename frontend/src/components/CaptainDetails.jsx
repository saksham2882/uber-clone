import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-between gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover ' src="https://imgv3.fotor.com/images/homepage-feature-card/Random-image-generator_5.jpg" alt="" />
                    <h4 className='text-lg font-medium'>Shivam Singh</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹389.20</h4>
                    <p className='text-sm'>Earned</p>
                </div>
            </div>

            <div className='flex p-3 bg-gray-100 rounded-xl justify-center gap-5 items-start mt-8'>
                <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-timer-line'></i>
                    <h5 className='text-lg font-medium'>10.3</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
                    <h5 className='text-lg font-medium'>10.3</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
                    <h5 className='text-lg font-medium'>10.3</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
