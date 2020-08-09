var schedule = require("node-schedule");  

var rule1     = new schedule.RecurrenceRule();  

var times1    = [1,11,21,31,41,51];  

rule1.hour  = times1;  

schedule.scheduleJob('1-3 * * * * *', function(){  

  console.log(new Date());

});  