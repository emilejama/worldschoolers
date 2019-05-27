//index.js
//

console.log("started?");

function hide(query){
	document.getElementById(query).classList.add("hidden");
}

function show(query){
	document.getElementById(query).classList.remove("hidden");
}


function changeContent(id){
	hide("main_content");
	show("main_content");
}

function selectMenu(menu_id){
	var content = document.getElementById(menu_id);
	console.log("content arriving", content);

}

function loadJSFile(filename){
		
	loadjscssfile("js/"+filename+".js");
}
function showMenu(){
	var menu = [ 
		"content_1",
		"content_2",
		"content_3"
	];
	var menu_out = "";
	var initContent = "";
	for(item in menu){
		console.log(item,"jungiam duombaze",item,menu[item]);
		menu_out += "<div id=\""+menu[item]+"\" onclick=\"selectMenu('"+menu[item]+"')\">"+menu[item]+"</div>";
		loadJSFile(menu[item]);
		if(item === '0'){
					}
	}
	var menu_el = document.getElementById("main_menu");
	var content_el = document.getElementById("main_content");
	menu_el.innerHTML = menu_out;
	initContent = window[menu[0]];
	console.log('init', initContent);

	content_el.innerHTML = initContent;
	console.log("ole",menu,menu_el);
	//.innerHTML = menu;
}

function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

showMenu();

console.log("started!");
