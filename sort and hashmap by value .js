// script.js

function sortMap() {
    // Get the user input from the textarea
    let mapInput = document.getElementById("mapInput").value;

    // Split the input into key-value pairs and convert to a map (object)
    let map = {};
    let pairs = mapInput.split(',').map(pair => pair.trim());

    for (let pair of pairs) {
        let [key, value] = pair.split('=').map(item => item.trim());
        if (key && value) {
            map[key] = value;
        }
    }

    // Sort the map by values
    let sortedMap = sortMapByValue(map);

    // Display the sorted map in JSON format
    document.getElementById("result").textContent = JSON.stringify(sortedMap, null, 2);
}

function sortMapByValue(map) {
    // Convert the object (map) into an array of [key, value] pairs
    const entries = Object.entries(map);

    // Sort the array based on the value (index 1 of each entry)
    entries.sort((a, b) => a[1].localeCompare(b[1]));

    // Convert the sorted array back to an object
    const sortedMap = Object.fromEntries(entries);
    return sortedMap;
}