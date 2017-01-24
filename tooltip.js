$(document).ready(function(){
	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    $(".fixed-text").html(scroll);
	    if(scroll > 999 && scroll < 1100){
	    	$(".fixed-position").css({"font-size":"200%", "width":"370px"});
	    	$(".fixed-text").html("YOU HIT 1000!");
	    }else{
	    	$(".fixed-text").html(scroll);
	    	$(".fixed-position").css({"font-size":"100%", "width":"100px"});
	    }
	});

	$("#mybox").hover(function(){
		$("#tooltip-one").css("display","block");
	}, function(){
		$("#tooltip-one").css("display","none");
	});

	$(document).mousemove(function(event){
		var mx = event.pageX+15;
		var my = event.pageY+15;

		$("#tooltip-one").css("left", mx+"px").css("top", my+"px");
	});

	var infoElem = $('.info');

	infoElem.each(function(){
		var self = $(this),
			selfTooltipText = self.data('tooltip-text');
		if(selfTooltipText) $('<span/>',{class: 'tooltip-two', text: selfTooltipText}).appendTo(self);
	})

});