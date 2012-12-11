;(function($, window, undefined) {
	
	//Extendemos un efecto para jquery Animate
	jQuery.extend( jQuery.easing,
		{
			efectoRebote: function (x, t, b, c, d) {
				if ((t/=d) < (1/2.75)) {
					return c*(7.5625*t*t) + b;
				} else if (t < (2/2.75)) {
					return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
				} else if (t < (2.5/2.75)) {
					return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
				} else {
					return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
				}
			}
		});
		
	//Plugin	
    $.fn.menusito = function(efecto) {
        return this.each(function(){
			
			if(efecto===true)
			{
				var timeIn=800;
				var efectoIn='efectoRebote';
				
			}else{
			
				var timeIn=300;
				var efectoIn='swing';			
			
			}
			
            $botones = $(this).find('ul').children();

			$botones.each(function(){
			
				var aux=$(this).html();
				var html=	'<div class="top"></div>'+
							'<div class="bottom"></div>'+
							'<div class="txt">'+ aux +'</div>';
				$(this).html(html);	
			});
			
			$altura=$botones.height();
			
			$('.top,.bottom').css('height',$altura/2);

			$botones.hover(
				function(){
					
					$('.bottom,.top',$(this)).stop().animate({height:0},timeIn,efectoIn);
				},
				function(){
					$('.bottom,.top',$(this)).stop().animate({height:$altura/2},1000,'efectoRebote');
				}
			);
			
			
		});
	}
})(jQuery, window);