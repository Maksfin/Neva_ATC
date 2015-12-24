$(document).ready(function() {

	if($('#footer__map').length) {
		Maps.init();
	}

	$('.form').on('submit', function(e) {
		e.preventDefault();
	});

	$('.slider').bxSlider({
	 	auto: true,
	 	autoHover: true,
	 	mode: 'fade',
	 	speed: 800,
	});

}); // --> end


// // Модуль 
var Maps = (function() {

	var
		addMarker = function(location) {
	 
	    var shadow = new google.maps.MarkerImage('',    
	    new google.maps.Size(37, 32),
	    new google.maps.Point(0, 0),
	    new google.maps.Point(0, 32)); // Теневое изображение
	 
	    var image = new google.maps.MarkerImage('/img/elements/marker.png',
	      new google.maps.Size(30, 30),
	      new google.maps.Point(0, 0),
	      new google.maps.Point(0, 32)); //изображение маркера
	 
	    marker = new google.maps.Marker({
	        position: location,
	        map: map,
	        shadow: shadow,
	        icon: image,
	        title: "Нева-АТС",
	        zIndex: 999
	    });//добавление маркера
	   },
		
		initialize = function () {
			   var haightAshbury = new google.maps.LatLng(59.925051, 30.324998);//(широта, долгота)
				   var mapOptions = {
				        zoom: 16,//масштаб
				        center: haightAshbury,//позиционируем карту на заданые координаты
				        mapTypeId: google.maps.MapTypeId.ROADMAP//задаем тип карты
		    			};
	    		map = new google.maps.Map(document.getElementById("footer__map"), mapOptions);//инициализация карты
				
				var contentString = '<div id="content">Тут всё то про что должно быть рассказано</div>';
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				})

					addMarker(haightAshbury);
			};

	return {
		init: function () {
		   initialize();
		}
	};
})();

