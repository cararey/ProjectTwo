console.log('\'Allo \'Allo!');

$(document).ready(function() {
    var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    $('#addPixi').append(renderer.view);

	
	window.onresize = resize;
	resize();
	
	function resize() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	renderer.view.style.width = w + 'px';
	renderer.view.style.height = h + 'px';
	}

	
	
});


