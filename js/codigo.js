$(document).ready(function(){
	$ventana =$(window);
	$('#intro').height($ventana.height());
	$ventana.scroll(function(){
		$('div.background').each(function(index,item){
			var $scroll = $(item);
			var yPos = -($ventana.scrollTop() / $scroll.data('speed'));
			var coords = yPos + 'px';
			document.getElementById('intro').style.top = coords;
			/*$scroll.css({top:coords});*/
		})
	})
})
