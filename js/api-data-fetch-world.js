function convertToNepaliNumber(str) { str = str.toString(); str = str.replace(/0/g, '०'); str = str.replace(/1/g, '१'); str = str.replace(/2/g, '२'); str = str.replace(/3/g, '३'); str = str.replace(/4/g, '४'); str = str.replace(/5/g, '५'); str = str.replace(/6/g, '६'); str = str.replace(/7/g, '७'); str = str.replace(/8/g, '८'); str = str.replace(/9/g, '९'); return str; }
  $.ajax({
    type:"GET",
    url: "https://corona.lmao.ninja/v2/all",
    success: function(value) {
      // console.log(value);
                document.getElementById('world_cases').innerHTML = value.cases;
                document.getElementById('world_cases_nepali').innerHTML = convertToNepaliNumber(value.cases);
                document.getElementById('world_recovered').innerHTML =value.recovered;
                document.getElementById('world_recovered_nepali').innerHTML = convertToNepaliNumber(value.recovered);
                document.getElementById('world_active').innerHTML = value.active;
                document.getElementById('world_active_nepali').innerHTML = convertToNepaliNumber(value.active);
                document.getElementById('world_deaths').innerHTML = value.deaths;
                document.getElementById('world_deaths_nepali').innerHTML = convertToNepaliNumber(value.deaths);
    }
});
//   $.ajax({
//     type:"GET",
//     url: "https://data.nepalcorona.info/api/v1/world",
//     success: function(value) {
//       // console.log(value);
//                 document.getElementById('world_cases').innerHTML = value.cases;
//                 document.getElementById('world_cases_nepali').innerHTML = convertToNepaliNumber(value.cases);
//                 document.getElementById('world_recovered').innerHTML =value.recovered;
//                 document.getElementById('world_recovered_nepali').innerHTML = convertToNepaliNumber(value.recovered);
//                 document.getElementById('world_active').innerHTML = value.active;
//                 document.getElementById('world_active_nepali').innerHTML = convertToNepaliNumber(value.active);
//                 document.getElementById('world_deaths').innerHTML = value.deaths;
//                 document.getElementById('world_deaths_nepali').innerHTML = convertToNepaliNumber(value.deaths);
//     }
// });