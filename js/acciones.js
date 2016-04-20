// JavaScript Document

$(document).ready(function (e){
	document .addEventListener("deviceready",function(){
		 $('#disp table td').eq(3).text(device.model);
		 $('#disp table td').eq(5).text(device.cordova);
		 $('#disp table td').eq(7).text(device.platform);
		 $('#disp table td').eq(9).text(device.version);
		 $('#disp table td').eq(11).text(device.uuid);
	document.addEventListener("pause",function(){
		escibehistoria ('La app se Pausó');
	},false);//pause
	document.addEventListener("resume",function(){
		escibehistoria ('La app se Reinició');
	},false);//resume
	document.addEventListener("online",function(){
		escibehistoria ('La app se conecto a la red');
	},false);//se conecto
	document.addEventListener("offline",function(){
		escibehistoria ('La app se desconecto de la Red');
	},false);//se deconecto
	
	},false);//ready device
	
});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}
	