
          //getting the selected font color
          $("#black, #blue, #grey, #green, #red, #yellow, #brown, #white, #tan ").click(function(){
             var colorChosen = this.id;
            //sending a message to the content.js when a new font color is selected
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {colour: "changeFontColor", selectedColor: colorChosen}, function(response) {
            });
          });
        });


          //getting the selected font size
          $("input").click(function(argument) {
               var sizeChosen = this.id;
            //sending a message to the content.js with the size of the font selected
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {fontSizeChange: "changeFontSize", sizeSelected: sizeChosen}, function(response) {
            });
          });
        });

          //getting the selected background color
          $(".bgblack, .bgblue, .bggrey, .bggreen, .bgred, .bgyellow, .bgbrown, .bgwhite, .bgtan").click(function(){
             var backgroundChosen = this.id;
            //sending a message to the content.js when a new font color is selected
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {bg: "changeBackground", selectedBackground: backgroundChosen}, function(response) {
            });
          });
        });

