const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require("./iss");

// // Manually testing code:
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// // Manually testing code:
// fetchCoordsByIP("174.95.180.62", (error, coords ) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned coords:" , coords)
// })

// // Manually testing code:
// fetchISSFlyOverTimes({ latitude: 43.6547, longitude: -79.3623 }, (error, arr ) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned array of ISS fly over times:" , arr)
// })