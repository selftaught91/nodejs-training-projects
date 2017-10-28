var restler = require('restler');

// username has been replaced by selftaught91 

var url = "https://api.github.com/users/selftaught91";

options = {

    method : "get",
    timeout : 10000

};

restler.request(url,options)
    .on('timeout',function(time){

        console.log("Timeout occurred");

    })
.on('success',function(data,response){

    console.log('User details is : ',data); 
})
.on('fail',function(data,response){

    console.log('Request Failed : ',data);
})
.on('error',function(err,response){

    console.log('Error occurred : ',err);
});
