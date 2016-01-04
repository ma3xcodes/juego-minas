function explosion()
{

}
function win()
{

}
function add_style(element)
{
	var time;
	document.querySelector('.abso-space').style.display = "block";
	if(element.dataset.cont=="1"){
		document.getElementById("mp3").play();
		document.querySelector('.header').innerHTML = '<h1 style="margin:0 auto;">BOOOM!! <small>Intenta otra vez.</small></h1>';	
		element.style.background = "red";	
		element.style.backgroundImage = 'url("./img/mina.png")'	;
		element.style.backgroundSize = "100% 100%";	
		time = 2000;
	}else{
		element.style.background = "darkgreen";	
		time = 200;	
	}	
	ele_inter = setTimeout(function(){
		element.style.background = "white";
		document.location = "index.html";
		clearTimeout(ele_inter);
	}, time);
}
var listado = [0,1];
var field = [];
for (var i = 1; i <= 9; i++) {	
	aleatorio = Math.floor(Math.random()*(listado.length)); 
	seleccion = listado[aleatorio] ;
	document.querySelector('.space-game').innerHTML += "<div data-cont='"+seleccion+"' onclick='add_style(this)'></div>";
};

