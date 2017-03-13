var text=[
	"Irony is Fate's most common figure of speech.",
	"It was not their irritating assumption of equality that annoyed Nicholai so much as their cultural confusions. The Americans seemed to confuse standard of living with quality of life, equal opportunity with institutionalized mediocrity, bravery with courage, machismo with manhood, liberty with freedom, wordiness with articulation, fun with pleasure - in short, all of the misconceptions common to those who assume that justice implies equality for all, rather than equality for equals.",
	"Ironiya is Fate's most common figure of speech.",
	"Lorem Ipsum is a beautiful novel ."
];
var author=[
	"-Osho",
	"-Celil",
	"-Huseyn",
	"-Sabir"
];

(function(){
for(i=0;i<text.length;i++){
	but=document.createElement("div");
	but.setAttribute("class","buttons");
	document.getElementsByClassName("heading")[0].appendChild(but);
	but.setAttribute("onclick","celil(this)");
	 
	but.setAttribute("name",i);

	new_div=document.createElement("div");
	new_div.setAttribute("class","new_div");
	document.getElementById("row").appendChild(new_div);

		p_tag=document.createElement("p");
	p_tag.setAttribute("class","textt");
	p_tag.innerHTML=text[i];
	new_div.appendChild(p_tag);


	quote=document.createElement("blockquote");
	quote.setAttribute("class","quote");
	quote.innerHTML=author[i];
	new_div.appendChild(quote);



}

})()

div_left=0;

function celil(b){

k=parseInt(b.getAttribute("name"));



for(i=0;i<text.length;i++){
	document.getElementsByClassName("new_div")[i].style.left=div_left+"px";
	document.getElementsByClassName("buttons")[i].style.background="white";
}
b.style.background="black";

div_left=-1000*k;





}