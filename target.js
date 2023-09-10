'use strict';

const lineHorizontal= document.querySelector(".horizontal");
const lineVertical= document.querySelector(".vertical");
const target= document.querySelector(".target");
const tag= document.querySelector(".tag");

document.addEventListener("mousemove",(event)=>{
	const mouseX= event.clientX;
	const mouseY= event.clientY;
	const targetRect= target.getBoundingClientRect();
	const targetHalfWidth= targetRect.width/2;
	const targetHalfHeight= targetRect.height/2;


	
	lineVertical.style.transform=`translateX(${mouseX}px)`;
	lineHorizontal.style.transform=`translateY(${mouseY}px)`;
	target.style.transform=`translate(${mouseX-targetHalfWidth}px,${mouseY-targetHalfHeight}px)`;
	tag.style.transform=`translate(${mouseX}px,${mouseY}px)`;
	tag.innerHTML=`${mouseX}px,${mouseY}px`;
	
})