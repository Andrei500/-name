<?php
	//получаяем данные с формы
	$type = $_POST['val1'];
	$name1 = $_POST['name1'];
	$name2 = $_POST['name2'];
	$num = $_POST['num'];
	$nomer = $_POST['nomer'];
	$sit = $_POST['sit'];
	$pay = $_POST['pay'];
	
	//получаем время отправки
	$time = date('d F Y H:i:s');
	
	/* подключение к БД */
	$mysqli = new mysqli("localhost","root","","base");
	$mysqli-> query("SET NAMES 'utf8'");
	
	/* отправка данных */
	$mysqli -> query ("INSERT INTO `test` (`type`,`name1`,`name2`,`num`,`nomer`,`sit`,`pay`,`time`) 
	VALUES ('$type','$name1','$name2','$num','$nomer','$sit','$pay','$time')");
	
	$mysqli -> close();
?>



