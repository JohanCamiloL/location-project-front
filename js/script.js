const BASE_URL = 'http://localhost:3000/locations';

/**
 * Send location data to server.
 */
const sendLocationData = () => {
    const parentLocation = getInputValue('parent-location');
    const name = getInputValue('location-name');
    const locationArea = getInputValue('location-area');

    const locationObject = { parentLocation, name, locationArea };

    fetch(BASE_URL, {
        method: POST,
        body: JSON.stringify(locationArea)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

/**
 * Get value from input id.
 * @param {String} inputId Input value.
 */
const getInputValue = (inputId) => document.getElementById(inputId).value;