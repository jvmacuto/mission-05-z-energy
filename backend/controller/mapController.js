require('dotenv').config();

const getGeoLocation = async (req, res) => {
  try {
    const { lat, lng} = req.query
    const Google_Maps_API_Key = process.env.GOOGLE_MAPS_API_KEY
    const geocodingURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${Google_Maps_API_Key}`;
    const response = await fetch(geocodingURL);
    const data = await response.json();

    if (data.status === "OK") {
        res.json(data);
    } else {
        res.status(400).json({error: 'Geocoding error'});
    }
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({error: 'Server error'})
  }}

module.exports = { getGeoLocation };