console.log('\'Allo \'Allo!');

/*
$(document).ready(function() {
    var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    $('#addPixi').append(renderer.view);
	
	 var stage = new PIXI.Container();
	 
	 var grass = PIXI.Sprite.fromImage('grass.jpeg');
	
	 grass.anchor.x = 0.5;
	grass.anchor.y = 0.5;
	
	grass.position.x = 200;
	grass.position.y = 200;
	
	stage.addChild(grass);
	 

	
	window.onresize = resize;
	resize();
	
	function resize() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	renderer.view.style.width = w + 'px';
	renderer.view.style.height = h + 'px';
	}
	function render(){
	renderer.render(stage);
	}

	var text = new PIXI.Text("Welcome", {font:"50px Arial", dropShadow: true, fill:"white"});
	
	
}); */


/* for fullpage.js */
(function($) {
  
  'use strict';

  // variables
  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single');

  // initialize fullPage
  $('#fullpage').fullpage({

    navigation: true,
    onLeave: function(index, nextIndex, direction) {
    
      /**
      * use the following condition: 
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first section to another sections 
      */
      
      // first animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeInUpBig'); 
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
      }

    /**
      * use the following condition: 
      *
      *   else if( index == 2 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) from the first section to the third one 
      */
      
      // second animation
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s'); 
        $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
        $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
      }

      
     /**
      * use the following condition:
      *
      *   else if( index == 3 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first or second section to the fourth one 
      */
      
      // third animation
      else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
        $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
        $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
        });
      }
    }

  });
  
})(jQuery);

/*garden animation*/

var canvas = document.getElementById('garden');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


$('#maintitle').addClass('animated fadeIn');
$('#lineone').addClass('animated fadeInLeft');
$('#linetwo').addClass('animated flash');






















