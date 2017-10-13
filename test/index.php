<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>test</title>
	<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
	<div class="container-top">
		<header>
			<!--логотип-->
			<a class="logo" href="#"><img src="img/logo.png" alt="изображение не загружено"/></a>
			<!--панель контактов и соц кнопок-->
			<div class="contact">
				<a href="#">+380 (66) 856-07-80</a>
				<div class="social">
					<a href="#" class="vk"></a>
					<a href="#" class="ok"></a>
					<a href="#" class="viber"></a>
					<a href="#" class="whats"></a>
					<a href="#" class="ais"></a>
				</div>
			</div>
			<!--кнопка скрытого меню-->
			<i class="butt-menu fa fa-bars" aria-hidden="true"></i>
			<!--кнопка отправки-->
			<div id="regsub" class="reg-submit">Зарегестрировать отправку</div>
			<!--навигация-->
			<nav class="main_menu">
				<ul>
					<li><a href="#">Как отправить</a></li>
					<li><a href="#">Стоимость</a></li>
					<li><a href="#">Контакты</a></li>
				</ul>
			</nav>
		</header>
	</div>
	
	<!--выпадающая форма-->
	<div class="form-alert">
		<form action="action.php" method="post">
			<h1>Регистрация отправления</h1>
			
			<!--выбор типа груза-->
			<div class="hr"></div>
			<h3>Тип груза</h3>
			<div class="over w50">
				<label><input name="type" type="radio" value="Посылка" checked>Посылка</label>
				<label><input name="type" type="radio" value="Интернет-заказ">Интернет-заказ</label>
			</div>
			
			<!--ввод данных получателя-->
			<div class="hr"></div>
			<h3>Данные получателя в ЛДНР</h3>
			<div>Фамилия Имя Отчество</div>
			<input id="name" name="name1" type="text">
			<div class="w50 over">
				<div>
					<div>Телефон</div>
					<input name="nomer" type="text" value="+380">
				</div>
				<div>
					<div>Город получения</div>
					<select name="sit">
						<option value="Донецк">Донецк</option>
						<option value="Горловка">Горловка</option>
						<option value="Шахтерск">Шахтерск</option>
					</select>
				</div>
			</div>
			
			<!--ввод данных отправителя-->
			<div class="hr"></div>
			<h3>Данные отправителя из Украины</h3>
			<div>Фамилия Имя Отчество</div>
			<input name="name2" type="text">
			
			<!--данные о посылке-->
			<div class="hr"></div>
			<h3>Данные о посылке</h3>
			<div class="w50 over">
				<div>
					<div>Номер накладной</div>
					<input name="num" type="text">
				</div>
				<div>
					<div>Налож. платеж</div>
					<select name="pay">
						<option value="Да">Да</option>
						<option value="Нет">Нет</option>
					</select>
				</div>
			</div>
			
			<!--кнопка отправления-->
			<div id="reg2" class="reg-submit">Зарегестрировать</div>
		</form>
		
		<!--кнопка закрытия окна-->
		<i class="close fa fa-times" aria-hidden="true"></i>
	</div>
	
	<!--скрипты-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="js/sctipt.js"></script>
</body>
</html>