'use strict'

var fs = require('fs');
var ext = process.argv[2];
var name = process.argv[3];
var path= process.argv[0]; 

fs.readdir('.', function(err, items) 
	{ 
	function filterext(items,ext)
	 {
 		var arr = new Array()

 		for (var i = 0; i < items.length; i++) { 
 			var file= items[i];
 			if (file.endsWith(ext)){
 				arr.push(file);
	 		
 				}
 			}
 	return arr;
 	}

	function filtername(items,name)
		 {
		var arrname = new Array();

 		for (var i = 0; i<items.length; i++) {
 			if (items[i].includes(name)) {
 				arrname.push(items[i]);		
 				} 
		}
 		return arrname;

	}

	var arrext = filterext(items,ext);
	var list= filtername(arrext, name);

 	console.log(path+' '+list);
}
);