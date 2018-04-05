const moment = require('moment');
require('jquery');

//Write a clock!
function changeClock(){
	let now = moment();

	let seconds = now.seconds()*6;
	let minutes = now.minutes()*6 + (seconds/60);
	let hours = ((now.hours() % 12) / 12) * 360 + 90 + minutes / 12;

	$('#hour').css("transform", "rotate(" + hour + "deg)");
    $('#minute').css("transform", "rotate(" + minute + "deg)");
    $('#second').css("transform", "rotate(" + second + "deg)");
}