'use strict';
function openCart()
	{
	document.getElementById("cart-slot").style.width = "70vw";
	document.getElementById("cart-slot").style.boxShadow = "rgb(127 134 143 / 41%) -4em 0px 0px 1000vw ";
	}
function openCartM()
	{
		document.getElementById("cart-slot").style.width = "100%";
		document.getElementById("cart-slot").style.height = "100%";
		
	document.getElementById("cart-slot").style.boxShadow = "rgb(127 134 143 / 41%) -4em 0px 0px 1000vw";
	}
	function closeCart()
	{
		document.getElementById("cart-slot").style.width = "0vw";
	document.getElementById("cart-slot").style.boxShadow = "0em 0 0 0vw rgb(0 0 0 / 74%) ";
	}
function giftL(){
	document.getElementById("giftLabel").style.display = "block";
}

console.log('Hii');

let CloseItems = document.querySelectorAll('.cart-item-close').textContent;



