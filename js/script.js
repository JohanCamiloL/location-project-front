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
        .then(loadLocations())
        .catch(error => console.log(error))
}

/**
 * Get value from input id.
 * @param {String} inputId Input value.
 */
const getInputValue = (inputId) => document.getElementById(inputId).value;

/**
 * Load all locations on a table.
 */
const loadLocations = async () => {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    const locations = json.data;

    const table = document.querySelector('tbody');
    table.innerHTML = '';

    for (const location of locations) {
        const tr = document.createElement('tr');

        for (const key in location) {
            const td = document.createElement('td');
            td.innerText = location[key];

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

}