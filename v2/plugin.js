

var loadJsLibrary = function(path, callback){
	var script=document.createElement('script');
	script.src=path;
	script.type='text/javascript';
	script.addEventListener('load', callback);
	document.head.appendChild(script);
};


(function initialize(){
	// loadJsLibrary("js/jquery-2.1.1/jquery.min.js", function(){
	// 	// $("#su").attr("value","search");	
	// });
	// $("#su").attr("value","search");	
})();
