$(document).ready(function () {
    $('#materia').text('Programación para web');
    $('h2').text('Grupo 5to. A');
    $('h3').html('Profesor: <strong>José Nabor Ramírez Morfín</strong>');
    $('#alumnos').text('Lista de alumnos').css('text-align','center');
    $("li").each(function(i){
		if(i%2==0){
			$(this).css("background-color","#bdb9b8");
		}else{
			$(this).css("background-color", "white");
		}
	});
    $('li').hover(function(){
        $(this).css({'color':'green','cursor':'pointer'});
    });
    $('li').mouseout(function () { 
        $(this).css('color','#4a4a4a');
    });
    $('li').click(function(){
        $('#datos').html('<strong>Resultado: </strong>'+'<span>'+$(this).text()+'</span>').css('background-color','#998a08');
        $('span').css('color','white');
    });
});