// JavaScript Document\
var tinymove;
var pause;

onload = function () {
	"use strict";
	var pic = document.getElementsByClassName("pic"); //获取轮播class下的所有图片
	for (var i = 0; i <= pic.length; i++) {
		pic[i].style.left = i * 1200 + "px"; //把所有图片拼接
	}
};

function PicMove() {
	"use strict";
	var pic = document.getElementsByClassName("pic");
	
	for (var i = 0; i < pic.length; i++) { //每张图片每次移动一点点实现微移效果，当微移动完后拼接至末尾，并且暂停微移
		var left = parseFloat(pic[i].style.left); //获取当前img的left值
		left -= 20; //每次移动20px
		var width = 1200 ;//图片宽度
		if (left <= -width) {
			left = (pic.length - 1) * width; //当图片移动完后自动拼接至末尾
			clearInterval(tinymove);//清除移动
		}
		pic[i].style.left = left + "px";
	}
}

function TinyMove() {
	"use strict";
	tinymove = setInterval(PicMove, 10); //每10ms移动一次
}

pause = setInterval(TinyMove, 4600); //600+4000  每4秒执行一次微移

function stop() {
	"use strict";
	clearInterval(pause); //暂停pic大移
}

function start() {
	"use strict";
	clearInterval(pause);
	pause = setInterval(TinyMove, 4600); //开始pic大移
}

onblur = function () {
	"use strict";
	stop(); //鼠标移至pic暂停
};
onfocus = function () {
	"use strict";
	start(); //移出继续
};
/*此算法注意点!!!!
图片大小除以每次移动的距离和每次移动的间隔乘积要小于一次移完停顿，也就是pic大移*/
function jumpon(){
	"use strict";
	document.getElementById("jumpleft").style.borderRightColor="rgba(0,0,0,.3)";
	document.getElementById("jumpright").style.borderLeftColor="rgba(0,0,0,.3)";
}
function jumpoff(){
	"use strict";
	document.getElementById("jumpleft").style.borderRightColor="rgba(255,255,255,0)";
	document.getElementById("jumpright").style.borderLeftColor="rgba(255,255,255,0)";
}
function jumpleft(){
	"use strict";
	var pic=document.getElementsByClassName("pic");
	for(var i=0; i<pic.length; i++){
		var left=parseFloat(pic[i].style.left);
		left+=1200;
		if(left>(pic.length-1)*1200){
			left=0;
		}
		pic[i].style.left=left+"px";
	}
}
function jumpright(){
	"use strict";
	var pic = document.getElementsByClassName("pic");
	
	for (var i = 0; i < pic.length; i++) {
		var left = parseFloat(pic[i].style.left);
		left -=1200;
		if (left <=-1200) {
			left = (pic.length - 1) * 1200;
		}
		pic[i].style.left = left + "px";
	}
}