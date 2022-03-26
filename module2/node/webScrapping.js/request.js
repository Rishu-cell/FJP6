/*WHAT IS WEB SCRAPPING ?? 
WEB SE data ko uthana ..................
 */
// npm i request   [install kri request // i means install]
const request=require('request');
request('http://www.google.com',function(error,response,body){
    if(error){
        console.error('error:',error) // print the error if one ocured
    }
    else{
        console.log('body:',body) // print the html for the google homepage
    }
});

// function m function call kr skte hai /*CALL BACK  agr koi fun as a parameter pass hota hai function me */