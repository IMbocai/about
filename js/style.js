//加载时各模块宽高
$(document).ready(function(){
	auto();
	$(".layer").eq(0).show();
	imgShow();
	//timer();
});

//窗口大小改变， 各模块高度自适应
$(window).resize(function(){
	auto();
});

//宽高自适应
function auto(){
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	$(document.body).height(winHeight)
					.width(winWidth);
	$(".layer").height(winHeight)
			   .width(winWidth);
}

//鼠标滚动
var check = true;
var index = 0;
var scene = "scene";
$(document).bind("mousewheel",function(ev,delta){
	clearTimeout(timer);
	if(check){
		check = false;
		if(delta == -1){
			if(index <= 4){
				$("#nav i").eq(index).removeClass()
							.next().addClass("active");
				index++;
				$(".layer").removeClass("active").fadeOut();
				$(".layer").eq(index).fadeIn()
									 .addClass("active");
			}
		}else{
			if(index > 0){
				$("#nav i").eq(index).removeClass()
							.prev().addClass("active");
				index--;
				$(".layer").removeClass("active").fadeOut();
				$(".layer").eq(index).fadeIn()
									 .addClass("active");
			}
		}
		var timer = setTimeout(function(){//防止鼠标一次性滚动较长距离
			check = true;
		},1000)
	}
});

//导航栏点击
$("#nav i").bind("click",function(){
	if(!$(this).hasClass("active")){
		index = $(this).attr("data-index");
		$("#nav i").removeClass()
					.eq(index).addClass("active");
		$(".layer").removeClass("active").fadeOut();
		$(".layer").eq(index).fadeIn()
							 .addClass("active");
	}
})

//页面加载图片显示
function imgShow(){
	var left = $("#author img").position().left - 50 + "px";//头像具体位置，为小图片消失位置准备
	var top = $("#author img").position().top - 50 + "px";
	$("#author").hide();
	$("#skill").hide();
	//json数据，存放小图片具体信息
	var imgSrc = {
		html:{
			name:"html",
			src:"h5.jpg",
			width:"100px",
			// left:"620px",
			left:"45%",
			// top:"240px",	
			top:"37%",	
			borderR:"50px"
		},
		css:{
			name:"css",
			src:"css3.jpg",
			width:"50px",
			// left:"356px",
			left:"26%",
			// top:"150px",
			top:"24%",	
			borderR:"16px"
		},
		js:{
			name:"js",
			src:"js.jpg",
			width:"70px",
			// left:"440px",
			left:"32%",
			top:"37%",	
			// top:"236px",	
			borderR:"35px"
		},
		jq:{
			name:"jq",
			src:"jQ.jpg",
			width:"124px",
			// left:"805px",
			left:"59%",
			top:"56%",	
			// top:"360px",	
			borderR:"25px"
		},
		abgular:{
			name:"angular",
			src:"angular.jpg",
			width:"68px",
			left:"73%",
			// left:"990px",
			top:"23%",	
			// top:"150px",	
			borderR:"34px"
		},
		chrome:{
			name:"chrome",
			src:"chrome.jpg",
			width:"70px",
			left:"24%",
			// left:"320px",
			top:"57%",	
			// top:"368px",	
			borderR:"35px"
		},
		firebug:{
			name:"firebug",
			src:"firbug.jpg",
			width:"161px",
			// left:"772px",
			left:"57%",
			top:"16%",	
			// top:"100px",	
			borderR:"16px"
		},
		fox:{
			name:"fox",
			src:"fox.jpg",
			width:"40px",
			// left:"560px",
			left:"41%",
			top:"52%",	
			// top:"336px",	
			borderR:"16px"
		},
		git:{
			name:"git",
			src:"git.jpg",
			width:"60px",
			// left:"420px",
			left:"31%",
			top:"7%",	
			// top:"50px",	
			borderR:"16px"
		},
		http:{
			name:"http",
			src:"http.gif",
			width:"57px",
			// left:"900px",
			left:"66%",
			top:"84%",	
			// top:"540px",	
			borderR:"16px"
		},
		json:{
			name:"json",
			src:"json.jpg",
			width:"45px",
			// left:"500px",
			left:"41%",
			top:"66%",	
			// top:"425px",	
			borderR:"16px"
		},
		mysql:{
			name:"mysql",
			src:"mysql.jpg",
			width:"50px",
			// left:"700px",
			left:"51%",
			top:"62%",	
			// top:"400px",	
			borderR:"16px"
		},
		node:{
			name:"node",
			src:"node.jpg",
			width:"80px",
			// left:"775px",
			left:"57%",
			top:"38%",	
			// top:"246px",	
			borderR:"16px"
		},
		opera:{
			name:"opera",
			src:"opera.jpg",
			width:"40px",
			// left:"700px",
			left:"52%",
			top:"8%",	
			// top:"50px",	
			borderR:"16px"
		},
		ps:{
			name:"ps",
			src:"ps.gif",
			width:"40px",
			// left:"250px",
			left:"18%",
			top:"63%",	
			// top:"400px",	
			borderR:"16px"
		},
		svn:{
			name:"svn",
			src:"svn.png",
			width:"70px",
			// left:"910px",
			left:"67%",
			top:"45%",	
			// top:"290px",	
			borderR:"40px"
		},
	}
	//小图片逐个加载到第一个模块
	for(var i in imgSrc){
		var src = "image/" + imgSrc[i].src;
		var className = "imgIndex" + imgSrc[i].name;
		var img = "<img class='imgIndex "+className+"'"+" src='"+src+"'/>";
		var class_Name = "."+className;
		$("#scene0").append(img);//小图片逐个添加到第一个模块页面
		$(class_Name).css(
			{	
				"position":"absolute",
				"width":imgSrc[i].width,
				"left":imgSrc[i].left,
				"top":imgSrc[i].top,
				"borderRadius":imgSrc[i].borderR,
				"display":"none"
			}
		);
	}//小图片加载完毕

	//小图片逐个显示
	var imgLength = $(".imgIndex").length;
	var n = 0;
	var showImgIntval = setInterval(function(){
		if(n > imgLength){
			clearInterval(showImgIntval);
			hideImg(left,top);
		}else{
			showImg(n);
			n ++;
		}
	},100)
	function showImg(n){
		$(".imgIndex").eq(n).fadeIn("300");
	}

	//小图片消失
	function hideImg(left,top){
		$(".imgIndex").addClass("transtion")
					  .css({
					  	left:left,
					  	top:top,
					  	opacity:0
					  });
		setTimeout(function(){
			$(".imgIndex").remove();
			$("#author").show("slow");
			$("#skill").show();
		},600)
	}
}
