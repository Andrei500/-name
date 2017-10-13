// слайдер
var i=1;
var time=4000;
var images=4;											/* количевство изображений */
$('.slide:nth-child(1) path').addClass("active");		/* старт первого  SVG*/
$('.slide:nth-child(1) .text').addClass("activer");		/* старт первого  текст*/
$('.slide:nth-child(1) .bgslide').css('left','0%');		/* сброс для первого слайда */
setTimeout("newslide()",time);							/* первый запуск */
var flag=0;

/* $(".left").bind("click",function(){						фунцционал листания 
	return newslide();
});
$(".right").bind("click",function(){						фунцционал листания 
	newslide();
});*/

function newslide(){
	if(i==images){											/* деактивация стилей */
		$('.slide .bgslide').removeClass("active2");
		$('.slide .bgslide').removeClass("active1");
		$('.slide .bgslide').addClass("deactive");
		$('#container').css('transform','translate3d(0%, 0, 0)');
		$('.slide:nth-child(4) path').removeClass("active");/* деактивация последнего  SVG*/
		$('.slide:nth-child(1) path').addClass("active")	/* активация первого  SVG*/	
		$('.slide:nth-child(4) .text').removeClass("activer");/* деактивация последнего  текст*/
		$('.slide:nth-child(1) .text').addClass("activer")	/* активация первого  текст*/
	}
	if(i<images){											/* следующий слайд */
		$('.slide .bgslide').removeClass("deactive");
		$('#container').css('transform','translate3d(-'+i+'00%, 0, 0)');
		$('.slide:nth-child('+(i+1)+') .bgslide').addClass("active2");
		$('.slide:nth-child('+i+') .bgslide').addClass("active1");	
		$('.slide:nth-child('+(i+1)+') path').addClass("active");/* активация следующего SVG*/	
		$('.slide:nth-child('+i+') path').removeClass("active");/* деактив предыдущего SVG */
		$('.slide:nth-child('+(i+1)+') .text').addClass("activer");/* активация следующего текст*/
		$('.slide:nth-child('+i+') .text').removeClass("activer");/* деактив предыдущего текст */
	}
	i++;
	if(i==(images+2)){											/* начинаем с начала */
		i=1; 
		return newslide();
	}
	if(!flag) var timer = setTimeout("newslide()",time);						/* повтор */
}

