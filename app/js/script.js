$(document).ready(function(){

	// document.body.style.backgroundImage = "url('background.jpg')";
	
// alert("scriptTest here...")
	

	$(".buttonBox").hover(function(){

		$(this).addClass("hoverButton");

	}, function(){

		$(this).removeClass("hoverButton");

	});



	var $currentPage = 1;
	switchImage(1);

	var $currentlySwitchable = true;

	

	// $('body').css('background-image', 'url(waterlily.jpg)');
	// $("body").style.backgroundImage="background.jpg"

	$("#page1").show();

	$("#page2").hide();

	$("#page3").hide();

	

	$("#button1").click(function(){

		switchToPage(1, $currentPage);
		switchImage(1);

	});

	

	$("#button2").click(function(){

		switchToPage(2, $currentPage);
		switchImage(2);
		// change background photo

	});

	

	$("#button3").click(function(){

		switchToPage(3, $currentPage);
		switchImage(3);

	});

	function switchImage($page){
		// alert("current page: " + $page)
		switch ($page)
		{
			case 1:
				$('.backgroundPicture').css('background-image', 'url(../images/waterlily.jpg)');
				break;
			case 2:
				// change css opacity only for this image
				$('.backgroundPicture').css('background-image', 'url(../images/background_70.png)');
				// $('.backgroundPicture').css('background': 'url(../images/background.jpg)' 'rgba(0, 0, 0, 0.6)' );
				break;		
			case 3:
				$('.backgroundPicture').css('background-image', 'url(../images/room.jpg)');
		};
	};


	var switchToPage = function($newPage, $oldPage){

		var $newPageVar = "#page" + $newPage;

		var $oldPageVar = "#page" + $oldPage;

		if($currentlySwitchable == true && $newPage != $oldPage) {

			$currentlySwitchable = false;

			$("#contentBox").fadeOut(400);

			$($oldPageVar).fadeOut(400, function(){

				$oldHeight = $($oldPageVar).outerHeight(true);

				$newHeight = $($newPageVar).outerHeight(true);

				$("#contentBox").fadeIn(400);

				$($newPageVar).fadeIn(400, function(){

					$currentlySwitchable = true;

				});

			});

			$currentPage = $newPage;

		}

	};

	// collapse sub-menus if clicked anywhere else
	$(document).on("click", function(e){
		var _this = $( this );
		var $trigger = $(".has-submenu");
		if(_this !== $trigger) {
			$(".sub-menu").removeClass("toggled-on");

			$("navbar-toggle").addClass("collapsed");
		};
		
		// this hides elements with class of collapse
		$(".collapse").collapse("hide");
	});


	// if($("#page1").is(":visible")) {
		
	// }
	// if($("#page2").is(":visible")) {
	// 	$('#backgroundPicture').css('background-image', 'url(waterlily.jpg)');
	// }
	// if($("#page3").is(":visible")) {
	// 	$('#backgroundPicture').css('background-image', 'url(background.jpg)');
	// }
	


});