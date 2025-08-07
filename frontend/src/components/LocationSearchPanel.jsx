import React from 'react'

const LocationSearchPanel = (props) => {
    console.log("Console props: ", props)

    // sample array
    const locations = [
        "B-54, Mitra Enclave, Knowledge park-||, Greater Noida",
        "B-86, Judge Society, Knowledge park-||, Greater Noida",
        "B-54, Mitra Enclave, Knowledge park-||, Greater Noida",
        "B-54, Mitra Enclave, Knowledge park-||, Greater Noida",
    ]

    return (
        <div>
            {
                locations.map(function (element, index) {
                    return (
                        <div
                            onClick={() => {
                                props.setVehiclePanelOpen(true)
                                props.setPanelOpen(false)
                            }}
                            key={index}
                            className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-4 justify-start'
                        >
                            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-fill'></i></h2>
                            <h4 className='font-medium'>{element}</h4>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default LocationSearchPanel
