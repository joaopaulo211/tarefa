var gpsData = require('./frontend_data_gps.json');

let latitude = [];
let longitude = [];

let obj = gpsData.courses;

obj.forEach(element => {
    element.gps.forEach(element2 => {
        longitude.push(element2.longitude);
        latitude.push(element2.latitude);
    })
});

latitude.sort();
longitude.sort();

for (let i = 0; i < latitude.length || i < longitude.length; i++) {
    console.log( longitude[i] + ',' + latitude[i]);
}