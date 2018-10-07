$(document).ready(function(){
	$ventana =$(window);
	$('#intro').height($ventana.height());
	$ventana.scroll(function(){
		$('div.background').each(function(index,item){
			var $scroll = $(item);
			var yPos = -($ventana.scrollTop() / $scroll.data('speed'));
			var coords = '50%' + yPos + 'px';
			$scroll.css({backgroundPosition:coords});
		})
	})
})
