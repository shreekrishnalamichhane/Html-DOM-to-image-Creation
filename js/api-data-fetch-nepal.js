function __convertToNepaliNumber(str) { str = str.toString(); str = str.replace(/0/g, '०'); str = str.replace(/1/g, '१'); str = str.replace(/2/g, '२'); str = str.replace(/3/g, '३'); str = str.replace(/4/g, '४'); str = str.replace(/5/g, '५'); str = str.replace(/6/g, '६'); str = str.replace(/7/g, '७'); str = str.replace(/8/g, '८'); str = str.replace(/9/g, '९'); return str; }
// $.ajax({
//   type:"GET",
//   url: "https://corona.lmao.ninja/v2/countries/nepal",
//   success: function(value) {
//     // console.log(value);
//     // value.updated_at = value.updated_at.split('T');
//               document.getElementById('tested_positive').innerHTML = value.cases;
//               document.getElementById('tested_positive_nepali').innerHTML = convertToNepaliNumber(value.cases) ;
//               document.getElementById('recovered').innerHTML = value.recovered;
//               document.getElementById('recovered_nepali').innerHTML = convertToNepaliNumber(value.recovered) ;
//               document.getElementById('in_isolation').innerHTML = value.active;
//               document.getElementById('in_isolation_nepali').innerHTML = convertToNepaliNumber(value.active) ;
//               document.getElementById('deaths').innerHTML = value.deaths;
//               document.getElementById('deaths_nepali').innerHTML = convertToNepaliNumber(value.deaths) ;
              
//               var date = new Date();
//               var hours = date.getHours();
//               var am_pm = "AM";
              
//               if(hours > 12){
//                   hours = hours-12;
//                   am_pm = "PM";
//               }
//               if(hours<10){
//                   hours = "0" + hours;
//               }
//               var minutes = date.getMinutes();
//               if(minutes<10){
//                   minutes = "0" + minutes;
//               }
//               var date_final = value.updated_at[0] + "&nbsp;&nbsp;" + hours + ":" + minutes + " " + am_pm ;
//               document.getElementById('updated_at').innerHTML = date_final;
                
//   }
// });
$.ajax({
  type:"GET",
  url: "https://nepalcorona.info/api/v1/data/nepal",
  success: function(value) {
    // console.log(value);
    value.updated_at = value.updated_at.split('T');
              document.getElementById('tested_positive').innerHTML = value.tested_positive;
              document.getElementById('tested_positive_nepali').innerHTML = convertToNepaliNumber(value.tested_positive) ;
              document.getElementById('recovered').innerHTML = value.recovered;
              document.getElementById('recovered_nepali').innerHTML = convertToNepaliNumber(value.recovered) ;
              document.getElementById('in_isolation').innerHTML = value.in_isolation;
              document.getElementById('in_isolation_nepali').innerHTML = convertToNepaliNumber(value.in_isolation) ;
              document.getElementById('deaths').innerHTML = value.deaths;
              document.getElementById('deaths_nepali').innerHTML = convertToNepaliNumber(value.deaths) ;
              
              var date = new Date();
              var hours = date.getHours();
              var am_pm = "AM";
              
              if(hours > 12){
                  hours = hours-12;
                  am_pm = "PM";
              }
              if(hours<10){
                  hours = "0" + hours;
              }
              var minutes = date.getMinutes();
              if(minutes<10){
                  minutes = "0" + minutes;
              }
              var date_final = value.updated_at[0] + "&nbsp;&nbsp;" + hours + ":" + minutes + " " + am_pm ;
              document.getElementById('updated_at').innerHTML = date_final;
                
  }
});