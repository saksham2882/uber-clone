const axios = require('axios')
const { address } = require('framer-motion/client')

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    console.log("Google Maps API Key:", apiKey);


    try {
        console.log("Request URL:", url); 
        const response = await axios.get(url);

        console.log("Google API Response:", response.data);

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        }
        else {
            throw new Error('Unable to fetch coordinates');
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}