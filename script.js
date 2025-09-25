const apiURL = 'https://corsproxy.io/?url=https://api.openmetrolinx.com/OpenDataAPI/api/V1/Gtfs/Feed/VehiclePosition';
const apiKey = '30025820';

fetch(apiURL, {
  headers: {
    'x-api-key': apiKey
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching Metrolinx API:', error);
  });