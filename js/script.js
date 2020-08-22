const BASE_URL = 'http://localhost:3000/locations';

/**
 * Send location data to server.
 */
const sendLocationData = () => {
    const parentName = getInputValue('parent-location');
    const name = getInputValue('location-name');
    const areaM2 = getInputValue('location-area');

    const locationObject = { parentName, name, areaM2 };
    console.log(locationObject);
    fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(locationObject),
        headers: {
            'Content-Type': 'application/json'
        }
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