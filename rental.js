var tl=gsap.timeline();

tl.from("#nav img,#nav h3",{
	y:-70,
	duration:0.6,
	opacity:0,
	stagger:0.1,
})
tl.from("#main h1,#main p",{
	y:-70,
	duration:1,
	stagger:0.2,
	opacity:0,
})
tl.from("#main select,#main button",{
	scale:0,
	duration:0.3,
	opacity:0,
})
gsap.from("#main2 #text h1 ,#text p",{
	scale:0,
	duration:1,
	scrollTrigger:{
		trigger:"#main2 #text h1 ,#text p",
		scroller:"body",
		markers:false,
		scrub:1,
		start:"top 90%",
		end:"top 30%",
	}
})
gsap.from("#main2 #box-1,#box-2,#box-3,#main2 #box2-1,#box2-2,#box2-3",{
	y:100,
	duration:3,
	opacity:0,
	stagger:1,
	scrollTrigger:{
		trigger:"#main2 #box-1,#box-2,#box-3,#main2 #box2-1,#box2-2,#box2-3",
		scroller:"body",
		markers:false,
		scrub:1,
		start:"top 80%",
		end:"top 40%",
	}
})
gsap.from("#brand3 #box3-1,#box3-2,#box3-3",{
	y:70,
	duration:1,
	opacity:0,
	stagger:1,
	scrollTrigger:{
		trigger:"#brand3 #box3-1,#box3-2,#box3-3",
		scroller:"body",
		scrub:1,
		markers:false,
		start:"top 95%",
		end:"top 60%",
	}
})
gsap.from("#main3 #brand4 #box4",{
	scale:0,
	duration:1,
	opacity:0,
	scrollTrigger:{
		trigger:"#main3 #brand4 #box4",
		scroller:"body",
		markers:false,
		start:"top 30%",
		scrub:1,
	}
});


var select1 = document.getElementById("slt");
var select2 = document.getElementById("slt2");
var select3 = document.getElementById("slt3");

var selectedOption1 = select1.options[select1.selectedIndex].text;
var selectedOption2 = select2.options[select2.selectedIndex].text;
var selectedOption3 = select3.options[select3.selectedIndex].text;


if(selectedOption1 ==="MAHINDRA"){
			alert("hy");
	}
