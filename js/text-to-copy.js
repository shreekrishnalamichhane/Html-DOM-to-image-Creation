var date_time = new Date();
//date
var year = date_time.getFullYear();
var month = date_time.getMonth();
if(month <10){
    month = "0" + month;
}
var day = date_time.getDate();
if(day <10){
    day = "0" + day;
}
var date = year + "-" + month + "-" + day;

//time
var hours = date_time.getHours();
var am_pm = "AM";

if( hours > 12){
    hours = hours-12;
    am_pm = "PM";
}
if(hours<10){
    hours = "0" + hours;
}
var minutes = date_time.getMinutes();
if(minutes<10){
    minutes = "0" + minutes;
}
var date_final = date + nbsp2 + hours + ":" + minutes + " " + am_pm ;
var textbox = document.querySelector('#text_to_copy');
var copybtn = document.querySelector('#copyBtn');


copybtn.addEventListener("click",()=>{
     textbox = document.getElementById('text_to_copy');

    /* Select the text field */
    textbox.select();
    textbox.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Text is Copied Successfully.");
});


//function to append the data from ajax function
function datareturn_with_obj(str,param){
    textbox.innerHTML  += str +": " + param.count + "&#13;";
}
function datareturn_with_value(str,param){
    textbox.innerHTML  += str +": " + param + "&#13;";
}

textbox.innerHTML  = "&nbsp;&nbsp;&nbsp;**COVID-19 UPDATE DETAILS** &#13;";
textbox.innerHTML += "Updated at:" + date_final +" &#13;";
textbox.innerHTML += "--------------------------------------- &#13;&#13;";
textbox.innerHTML += "Detailed Report of Nepal &#13;";
textbox.innerHTML += "======================== &#13;";
textbox.innerHTML += "All Nepal Cases: &#13;";
textbox.innerHTML += "----------------------------- &#13;";
$.ajax({
    type:"GET",
    async: false,
    url: "https://nepalcorona.info/api/v1/data/nepal",
    success: function(value) {
      datareturn_with_value("Total Cases ",value.tested_positive);
      datareturn_with_value("Active Cases ",value.in_isolation);
      datareturn_with_value("Recovered Cases ",value.recovered);
      datareturn_with_value("Death Cases ",value.deaths);
    },
});
$.ajax({
    type:"GET",
    async: false,
    url: "https://data.nepalcorona.info/api/v1/covid/summary",
    success: function(value) {
    //   datareturn_with_value("Active Cases ",value.current_state[1].count);
    //   datareturn_with_obj("Recovered Cases ",value.current_state[2].count);
    //   datareturn_with_obj("Death Cases ",value.current_state[0].count);
    },
});
textbox.innerHTML += "======================== &#13;";
textbox.innerHTML += "Province Report &#13;";
textbox.innerHTML += "--------------------- &#13;";
$.ajax({
    type:"GET",
    async: false,
    url: "https://data.nepalcorona.info/api/v1/covid/summary",
    success:function(value) {
        var total_cases_sort_by_prov_id = value.province.cases.slice(0);
        total_cases_sort_by_prov_id.sort(function(a,b) {
        return a.province - b.province;
        });
        var active_cases_sort_by_prov_id = value.province.active.slice(0);
        active_cases_sort_by_prov_id.sort(function(a,b) {
        return a.province - b.province;
        });
        var recovered_cases_sort_by_prov_id = value.province.recovered.slice(0);
        recovered_cases_sort_by_prov_id.sort(function(a,b) {
        return a.province - b.province;
        });
        var deaths_cases_sort_by_prov_id = value.province.deaths.slice(0);
        deaths_cases_sort_by_prov_id.sort(function(a,b) {
        return a.province - b.province;
    });
    console.log(deaths_cases_sort_by_prov_id);
        var value_temp = value;
        $.each(value_temp.province.cases,function (index) {
            datareturn_with_value("Province",index+1); 
            datareturn_with_value("----------------","");
            datareturn_with_obj("Total Cases ",total_cases_sort_by_prov_id[index]);
            datareturn_with_obj("Active Cases ",active_cases_sort_by_prov_id[index]);
            datareturn_with_obj("Recovered Cases ",recovered_cases_sort_by_prov_id[index]);
            datareturn_with_obj("Death Cases ",deaths_cases_sort_by_prov_id[index]);
            datareturn_with_value("------------------------","");
        })
    }
});
