$(document).ready(function(){

  // This section updates the menus using the last recorded state.                                                                                                                                             
  if($.cookie('bins')) {
    Shiny.onInputChange("myBins",$.cookie('bins'));
  }

  if($.cookie('band')) {
    Shiny.onInputChange("myBand",$.cookie('band'));
  }

  Shiny.addCustomMessageHandler("updateBinsCookie",function (myVal) {
    $.cookie("bins",myVal,{path: '/'});
  });

  Shiny.addCustomMessageHandler("updateBandCookie",function (myVal) {
    $.cookie("band",myVal,{path: '/'});
  });

});

