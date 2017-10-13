//скрипт выпадающего меню
var hidemenu = true;
$(".butt-menu").bind("click",function(){
	if(hidemenu){
		$(".main_menu ul").addClass("visible-nav");
		hidemenu = false;}
	else{
		$(".main_menu ul").removeClass("visible-nav");
		hidemenu = true;}
});

//выпадающая форма
$("#regsub").bind("click",function(){
	$(".form-alert").css("display","block");
});

//закрытие формы
var nonehide = false;
$(".form-alert form").bind("click",function(){nonehide=true;});//блокировка закрытия при нажатии на форму
$(".form-alert").bind("click",function(){
	if(nonehide==false){
		$(".form-alert").css("display","none");}	//закрыть если нет блокировки
	nonehide=false;	//сброс значения
});


//отправка данных 
$("#reg2").bind("click",function(){
	//обработка ошибок формы
	
	var val1 = $("input[name='type']:checked").val();
	if(!val1){
		var err1 = true;//не выбран тип груза
	}

	var nomer = $("input[name='nomer']").val();
	if(nomer.length != 13) {
		var err2 = true;//недостаточно цифр в номере
		$("input[name='nomer']").css("border-color","red");
	}else $("input[name='nomer']").css("border-color","#ccc");
	
	
	var name1 = $("input[name='name1']").val();
	if(name1.length < 1) {
		var err3 = true;//не введны ФИО 1
		$("input[name='name1']").css("border-color","red");
	}else $("input[name='name1']").css("border-color","#ccc");
	
	
	var name2 = $("input[name='name2']").val();
	if(name2.length < 1) {
		var err4 = true;//не введны ФИО 2
		$("input[name='name2']").css("border-color","red");
	}else $("input[name='name2']").css("border-color","#ccc");
	
	
	var num = $("input[name='num']").val();
	if(num.length < 1) {
		var err5 = true;//не введно имя накладной
		$("input[name='num']").css("border-color","red");
	}else $("input[name='num']").css("border-color","#ccc");

	//получаем другие значения
	var sit = $("select[name='sit']").val();
	var pay = $("select[name='pay']").val();
	
	//отправка если ошибок нет
	if(!err1 && !err2 && !err3 && !err4 && !err5){	
		//Ajax
		$.ajax({										
			url: "action.php",					//сюда будут отправленны данные
			type: "POST",
			data: ({val1: val1, nomer: nomer, name1: name1 ,name2: name2, num: num, sit: sit, pay: pay}),				//данные для отправки
			dataType: "html",
			success: funcSucc					//завершающее дейсвие
		});
		
		//закрытие формы после отправки
		function funcSucc(data){
			$(".form-alert").css("display","none");
		};
	}
});





	
