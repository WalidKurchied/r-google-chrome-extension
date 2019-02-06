
//variables
var active = false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      nightTime();
	}else if(request.colour === "changeFontColor"){
		//  sendResponse({farewell: "goodbye"});
		  changeFontColor(request.selectedColor);
	}else if(request.fontSizeChange === "changeFontSize"){
		changeFontSize(request.sizeSelected);
	}else if(request.bg === "changeBackground"){
		changeBackgroundColor(request.selectedBackground);
	}

	//sender.tab.url

  });

    

//NightTime vision
function nightTime(){
if(active == false){
	$("*").css('background-color','black');
	$('body').each(function(element){
	 	var el = $(this).css('color','#eeeeee');
	 });
	active = true;
}else{
	$('*').css('background-color','');
	$('body').each(function(element){
		$(this).css('color','black');
	});
	active = false;
}
}//end of night time vision



//change font color
function changeFontColor(color){
	 $("*").each(function(){
        $(this).css("color", color);
      });
//$("*").css("color", color);
}

//change font size
function changeFontSize(size){
     $("*").each(function(){
        $(this).css("font-size", size);
     });          
}
//change the background color
function changeBackgroundColor(bg){
	$("*").css('background-color',bg);
}
    


