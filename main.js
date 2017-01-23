$(document).ready(function(){

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
		console.log(self.data());
		if(selfTooltipText) $('<span/>',{class: 'tooltip-two', text: selfTooltipText}).appendTo(self);
	})

});