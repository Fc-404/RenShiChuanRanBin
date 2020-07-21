// JavaScript Document
//信息摘要记忆，用于判断，0为默认或者关，1为其他或者开
var num = 0; //背景判断
var numsp = 0; //span样式判断
var i = 0; //title判断
//本地文件
var m01 = 'information/01鼠疫.htm';
var m02 = 'information/02霍乱.htm';
var m03 = 'information/03结核病.htm';
var m04 = 'information/04艾滋病.htm';
var m05 = 'information/05狂犬病.htm';
var m06 = 'information/06百日咳.htm';
var m07 = 'information/07炭疽.htm';
var m08 = 'information/08病毒性肝炎.htm';
var m09 = 'information/09登革热.htm';
var m10 = 'information/10新生儿破伤风.htm';
var m11 = 'information/11流行性乙型脑炎.htm';
var m12 = 'information/12人感染H7N9禽流感.htm';
var m13 = 'information/13血吸虫病.htm';
var m14 = 'information/14钩端螺旋体病.htm';
var m15 = 'information/15梅毒.htm';
var m16 = 'information/16淋病.htm';
var m17 = 'information/17布鲁氏菌病.htm';
var m18 = 'information/18猩红热.htm';
var m19 = 'information/19流行性脑脊髓膜炎.htm';
var m20 = 'information/20伤寒和副伤寒.htm';
var m21 = 'information/21疟疾.htm';
var m22 = 'information/22流行性出血热.htm';
var m23 = 'information/23麻疹.htm';
var m24 = 'information/24人感染高致命性禽流感.htm';
var m25 = 'information/25脊髓灰质炎.htm';
var m26 = 'information/26传染性非典型肺炎.htm';
var m27 = 'information/27细菌性痢疾.htm';
var m28 = 'information/28白喉.htm';
var m29 = 'information/29感染性腹泻病.htm';
var m30 = 'information/30丝虫病.htm';
var m31 = 'information/31麻风病.htm';
var m32 = 'information/32黑热病.htm';
var m33 = 'information/33包虫病.htm';
var m34 = 'information/34流行性和地方性斑疹伤寒.htm';
var m35 = 'information/35急性出血结膜炎.htm';
var m36 = 'information/36风疹.htm';
var m37 = 'information/37流行性腮腺炎.htm';
var m38 = 'information/38流行性感冒（流感）.htm';
var m39 = 'information/39手足口病.htm';
var m40 = 'information/40寨卡病毒病.htm';
var m41 = 'information/41鼻疽和类鼻疽.htm';
var m42 = 'information/42人兽共患病.htm';
var m43 = 'information/43基孔肯雅热.htm';
var m44 = 'information/44广州管圆线虫病.htm';
var m45 = 'information/45阿米巴性痢疾.htm';
var m46 = 'information/46人猪重症链球菌感染.htm';
var m47 = 'information/47德国肠出血性大肠杆菌O104感染.htm';
var m48 = 'information/48美洲锥虫病.htm';
var m49 = 'information/49诺如病毒急性胃肠炎.htm';
var m50 = 'information/50颚口线虫病.htm';
var m51 = 'information/51西尼罗病毒.htm';
var m52 = 'information/52马尔堡出血热.htm';
var m53 = 'information/53拉沙热.htm';
var m54 = 'information/54黄热病.htm';
var m55 = 'information/55裂谷热.htm';
var m56 = 'information/56埃博拉出血热.htm';
var m57 = 'information/57中东呼吸道综合征.htm';

//点击实现下载当前ifeame页面的word文件
function download() {
	"use strict";
	var x = document.getElementById('InformationSrc').getAttribute('src'); //获取当前ID src值
	var y = x.replace(/htm/g, "docx"); //修改src后缀，实现下载相应word
	window.open(y); //打开word文档，自动下载
}

//主题按钮显示title逻辑 点击主题选项执行
function ctheme() {
	"use strict";
	if (document.getElementById('theme').style.display === 'block') { //点击事件，如果主题选择栏可见，那么关闭，并且把背景改为默认，并且重置判断为关，并且title字为默认
		document.getElementById('theme').style.display = 'none';
		document.getElementById('back').style.backgroundImage = 'url("../img/background-head.jpg")';
		i = 0; //设置为零，说明主题为默认
		document.getElementById('ttheme').title = "主题";
	} else { //否则，如果主题为其他，就改title，并且关闭主题选择
		if (i !== 0) {
			document.getElementById('ttheme').title = "再次点击还原背景";
		}
		document.getElementById('theme').style.display = 'block';
	}
}
//点击主题后函数
function backtheme() { //点击主题后关闭选项并且设置主题信息为其他和改title显示，目的是，点击主题后title显示变了，但是还原背景后没有重置title，解决了再次打开主题选项title显示其他的bug
	"use strict";
	num = 1;
	document.getElementById('theme').style.display = 'none';
	i = 1;
	document.getElementById('ttheme').title = "主题";
}
//返回默认背景函数
function back() { //主题选择栏移出事件，如果主题为其他，否则改为默认背景
	"use strict";
	if (num === 1) {} else {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url("../img/background-head.jpg")';
		x.style.backgroundColor = 'null';
	}
	num = 0; //重置判断
}

var atspan = document.getElementsByTagName("span"); //获取span集合

function onthis(a) { //实现点击后当前标记样式改变
	"use strict";
	var n; //57个span循环
	for (n = 0; n < 57; n++) {
		if (atspan[n].name === 'on') { //循环判断span标记是否开启如果开启还原背景，并关闭，否则把当前设为开启
			atspan[n].style.backgroundColor = 'rgba(255,255,255,0)';
			atspan[n].name = 'off'; //关闭
		}
	}
	a.style.backgroundColor = 'rgba(255,255,255,.6)';
	a.name = 'on'; //开启
	numsp = 1; //当前span样式为开启
}
//span移入效果
function onsp(a) {
	"use strict";
	document.getElementById(a).style.backgroundColor = 'rgba(255,255,255,0.6)';
}
//span移出效果
function offsp(a) {
	"use strict";
	if (numsp === 0 && document.getElementById(a).name !== 'on') { //如果span是关闭样式和不在浏览，实现了span在浏览时被移出改样式的问题
		document.getElementById(a).style.backgroundColor = 'rgba(255,255,255,0)';
	}
	numsp = 0; //实现下一次移出能够实现
}
//html预加载
function load() {
	"use strict";
	//实现点击span改变ifeame的src
	document.getElementById("m01").onclick = function () {
		document.getElementById('InformationSrc').src = m01;
		onthis(this);
	};
	document.getElementById("m02").onclick = function () {
		document.getElementById('InformationSrc').src = m02;
		onthis(this);
	};
	document.getElementById("m03").onclick = function () {
		document.getElementById('InformationSrc').src = m03;
		onthis(this);
	};
	document.getElementById("m04").onclick = function () {
		document.getElementById('InformationSrc').src = m04;
		onthis(this);
	};
	document.getElementById("m05").onclick = function () {
		document.getElementById('InformationSrc').src = m05;
		onthis(this);
	};
	document.getElementById("m06").onclick = function () {
		document.getElementById('InformationSrc').src = m06;
		onthis(this);
	};
	document.getElementById("m07").onclick = function () {
		document.getElementById('InformationSrc').src = m07;
		onthis(this);
	};
	document.getElementById("m08").onclick = function () {
		document.getElementById('InformationSrc').src = m08;
		onthis(this);
	};
	document.getElementById("m09").onclick = function () {
		document.getElementById('InformationSrc').src = m09;
		onthis(this);
	};
	document.getElementById("m10").onclick = function () {
		document.getElementById('InformationSrc').src = m10;
		onthis(this);
	};
	document.getElementById("m11").onclick = function () {
		document.getElementById('InformationSrc').src = m11;
		onthis(this);
	};
	document.getElementById("m12").onclick = function () {
		document.getElementById('InformationSrc').src = m12;
		onthis(this);
	};
	document.getElementById("m13").onclick = function () {
		document.getElementById('InformationSrc').src = m13;
		onthis(this);
	};
	document.getElementById("m14").onclick = function () {
		document.getElementById('InformationSrc').src = m14;
		onthis(this);
	};
	document.getElementById("m15").onclick = function () {
		document.getElementById('InformationSrc').src = m15;
		onthis(this);
	};
	document.getElementById("m16").onclick = function () {
		document.getElementById('InformationSrc').src = m16;
		onthis(this);
	};
	document.getElementById("m17").onclick = function () {
		document.getElementById('InformationSrc').src = m17;
		onthis(this);
	};
	document.getElementById("m18").onclick = function () {
		document.getElementById('InformationSrc').src = m18;
		onthis(this);
	};
	document.getElementById("m19").onclick = function () {
		document.getElementById('InformationSrc').src = m19;
		onthis(this);
	};
	document.getElementById("m20").onclick = function () {
		document.getElementById('InformationSrc').src = m20;
		onthis(this);
	};
	document.getElementById("m21").onclick = function () {
		document.getElementById('InformationSrc').src = m21;
		onthis(this);
	};
	document.getElementById("m22").onclick = function () {
		document.getElementById('InformationSrc').src = m22;
		onthis(this);
	};
	document.getElementById("m23").onclick = function () {
		document.getElementById('InformationSrc').src = m23;
		onthis(this);
	};
	document.getElementById("m24").onclick = function () {
		document.getElementById('InformationSrc').src = m24;
		onthis(this);
	};
	document.getElementById("m25").onclick = function () {
		document.getElementById('InformationSrc').src = m25;
		onthis(this);
	};
	document.getElementById("m26").onclick = function () {
		document.getElementById('InformationSrc').src = m26;
		onthis(this);
	};
	document.getElementById("m27").onclick = function () {
		document.getElementById('InformationSrc').src = m27;
		onthis(this);
	};
	document.getElementById("m28").onclick = function () {
		document.getElementById('InformationSrc').src = m28;
		onthis(this);
	};
	document.getElementById("m29").onclick = function () {
		document.getElementById('InformationSrc').src = m29;
		onthis(this);
	};
	document.getElementById("m30").onclick = function () {
		document.getElementById('InformationSrc').src = m30;
		onthis(this);
	};
	document.getElementById("m31").onclick = function () {
		document.getElementById('InformationSrc').src = m31;
		onthis(this);
	};
	document.getElementById("m32").onclick = function () {
		document.getElementById('InformationSrc').src = m32;
		onthis(this);
	};
	document.getElementById("m33").onclick = function () {
		document.getElementById('InformationSrc').src = m33;
		onthis(this);
	};
	document.getElementById("m34").onclick = function () {
		document.getElementById('InformationSrc').src = m34;
		onthis(this);
	};
	document.getElementById("m35").onclick = function () {
		document.getElementById('InformationSrc').src = m35;
		onthis(this);
	};
	document.getElementById("m36").onclick = function () {
		document.getElementById('InformationSrc').src = m36;
		onthis(this);
	};
	document.getElementById("m37").onclick = function () {
		document.getElementById('InformationSrc').src = m37;
		onthis(this);
	};
	document.getElementById("m38").onclick = function () {
		document.getElementById('InformationSrc').src = m38;
		onthis(this);
	};
	document.getElementById("m39").onclick = function () {
		document.getElementById('InformationSrc').src = m39;
		onthis(this);
	};
	document.getElementById("m40").onclick = function () {
		document.getElementById('InformationSrc').src = m40;
		onthis(this);
	};
	document.getElementById("m41").onclick = function () {
		document.getElementById('InformationSrc').src = m41;
		onthis(this);
	};
	document.getElementById("m42").onclick = function () {
		document.getElementById('InformationSrc').src = m42;
		onthis(this);
	};
	document.getElementById("m43").onclick = function () {
		document.getElementById('InformationSrc').src = m43;
		onthis(this);
	};
	document.getElementById("m44").onclick = function () {
		document.getElementById('InformationSrc').src = m44;
		onthis(this);
	};
	document.getElementById("m45").onclick = function () {
		document.getElementById('InformationSrc').src = m45;
		onthis(this);
	};
	document.getElementById("m46").onclick = function () {
		document.getElementById('InformationSrc').src = m46;
		onthis(this);
	};
	document.getElementById("m47").onclick = function () {
		document.getElementById('InformationSrc').src = m47;
		onthis(this);
	};
	document.getElementById("m48").onclick = function () {
		document.getElementById('InformationSrc').src = m48;
		onthis(this);
	};
	document.getElementById("m49").onclick = function () {
		document.getElementById('InformationSrc').src = m49;
		onthis(this);
	};
	document.getElementById("m50").onclick = function () {
		document.getElementById('InformationSrc').src = m50;
		onthis(this);
	};
	document.getElementById("m51").onclick = function () {
		document.getElementById('InformationSrc').src = m51;
		onthis(this);
	};
	document.getElementById("m52").onclick = function () {
		document.getElementById('InformationSrc').src = m52;
		onthis(this);
	};
	document.getElementById("m53").onclick = function () {
		document.getElementById('InformationSrc').src = m53;
		onthis(this);
	};
	document.getElementById("m54").onclick = function () {
		document.getElementById('InformationSrc').src = m54;
		onthis(this);
	};
	document.getElementById("m55").onclick = function () {
		document.getElementById('InformationSrc').src = m55;
		onthis(this);
	};
	document.getElementById("m56").onclick = function () {
		document.getElementById('InformationSrc').src = m56;
		onthis(this);
	};
	document.getElementById("m57").onclick = function () {
		document.getElementById('InformationSrc').src = m57;
		onthis(this);
	};
	//点击主题改变颜色事件
	document.getElementById("lanbai").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#9cbcd8';
		backtheme();
	};
	document.getElementById("tianlan").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#87cefa';
		backtheme();
	};
	document.getElementById("hailan").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#00f';
		backtheme();
	};
	document.getElementById("qinlv").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#0f0';
		backtheme();
	};
	document.getElementById("fuse").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#ffdbb1';
		backtheme();
	};
	document.getElementById("danfen").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#ffb6c1';
		backtheme();
	};
	document.getElementById("danhuang").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#ffd700';
		backtheme();
	};
	document.getElementById("chengse").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#ff4500';
		backtheme();
	};
	document.getElementById("zongse").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#cd853f';
		backtheme();
	};
	document.getElementById("huise").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#3D3D3D';
		backtheme();
	};
	document.getElementById("huibai").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#8a8a8a';
		backtheme();
	};
	document.getElementById("baise").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#fff';
		backtheme();
	};
	document.getElementById("heise").onclick = function () {
		var x = document.getElementById('back');
		x.style.backgroundImage = 'url(null)';
		x.style.backgroundColor = '#000';
		backtheme();
	};
}

//移入改变主题颜色函数堆
function lanbai() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#9cbcd8';
}

function tianlan() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#87cefa';
}

function hailan() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#00f';
}

function qinlv() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#0f0';
}

function fuse() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#ffdbb1';
}

function danfen() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#ffb6c1';
}

function danhuang() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#ffd700';
}

function chengse() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#ff4500';
}

function zongse() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#cd853f';
}

function huise() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#3D3D3D';
}

function huibai() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#8a8a8a';
}

function baise() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#fff';
}

function heise() {
	"use strict";
	var x = document.getElementById('back');
	x.style.backgroundImage = 'url(null)';
	x.style.backgroundColor = '#000';
}
//关闭主题选择
function closetheme() {
	"use strict";
	document.getElementById('theme').style.display = 'none';
}
