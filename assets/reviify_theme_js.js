var booster_divs ="";
  
var booster_stop_proof=0;
  
 function booster_toggle() {
  
    for (var i = 0, l = booster_divs.length; i < l; i++) {
        
         booster_divs[i].style.display = 'none';
    }
  if(booster_divs[booster_stop_proof]){
  booster_divs[booster_stop_proof].style.display = 'flex';
   booster_shop_fadeIn(booster_divs[booster_stop_proof], 500);
   booset_shop_display_time = document.getElementById("booset_shop_display_time").value;
      setTimeout(function() { booster_shop_fadeOUT(booster_divs[booster_stop_proof],500); },booset_shop_display_time*1000);
  }
   //booster_shop_fadeOUT(booster_divs[booster_stop_proof],500)
  // setInterval(booster_toggle, time_booster_timebetween*1000);

 
}
 function booster_shop_fadeIn(el, time) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();
 
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  
   
  tick();
   
}
  
function booster_shop_fadeOUT(el, time) {
     
  el.style.opacity = 1;

  var lastc = +new Date();
  var tick2 = function() {
    
    el.style.opacity = +el.style.opacity - (new Date() - lastc) / time;
    lastc = +new Date();

    if (+el.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick2)) || setTimeout(tick2, 16);
    }
     if (+el.style.opacity < 0) {
      el.style.opacity = 0;
       el.style.display = "none";
    }
     booster_stop_proof++;
    if(booster_stop_proof >= booster_divs.length ){
       booster_stop_proof=0;
  }
  };

  
   
  tick2();
}
  
  function booster_hide_proof(){
    document.getElementById("shop_booster_social_proof").style.display="none";
    clearTimeout(booster_free_timer);
  }
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
  var booster_free_timer;
 var time_booster_time ;
function booster_loadDoc() {
   
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && this.responseText!="null" ) {
      var str = this.responseText;
      var strToLazy = replaceAll(str,"min-width:90px;margin:0 auto;max-width: 90px;\"", "min-width:90px;margin:0 auto;max-width: 90px;\" class=\"lazy\" loading=\"lazy\"");
      strToLazy = replaceAll(strToLazy,"max-width:100%;\"", "max-width:100%;\" class=\"lazy\" loading=\"lazy\"");
 	  strToLazy = replaceAll(strToLazy," src=\"media/2019/", " src=\"//shopbooster.co/ali/admin/default/media/2019/");
      strToLazy = replaceAll(strToLazy," src=\"media/2020/", " src=\"//shopbooster.co/ali/admin/default/media/2020/");
      strToLazy = replaceAll(strToLazy,"https://shopbooster.co/ali/webf/css/all2.css", "");
      strToLazy = replaceAll(strToLazy,"https://shopbooster.co/ali/admin/default/shop-booster-grid.css", "");
      
      console.log(strToLazy);

     document.getElementById("shop_booster_social_proof").innerHTML = strToLazy;
     booster_divs = document.getElementsByClassName('shop_booster_sproof_d');
      if (document.getElementById("booset_shop_time_after_loading")) {
     time_booster_time = document.getElementById("booset_shop_time_after_loading").value;
	  }
	   if (document.getElementById("booset_shop_time_before_notification")) {
     time_booster_timebetween = document.getElementById("booset_shop_time_before_notification").value;
	   }
	  if (document.getElementById("booset_shop_display_time")) { 
      booset_shop_display_time = document.getElementById("booset_shop_display_time").value;
	  }
	  
	  if(document.getElementById('booset_shop_display_time')){
     booster_free_timer = setTimeout(function(){ booster_toggle(); setInterval(booster_toggle, time_booster_timebetween*1000 + +booset_shop_display_time*1000); }, +time_booster_time*1000 );
      
	  }
	  //booset_shop_time_after_loading
      
    }
  };
  xhttp.open("GET", "//shopbooster.co/ali/admin/sp.php?s="+Shopify.shop, true);
  xhttp.send();
}
  window.onload = function(e){ 
 booster_loadDoc();
  }
  
  
  
  if(document.getElementsByClassName("shop-booster-col-rat")){
  var xbooster = document.getElementsByClassName("shop-booster-col-rat");
  
  
   
for(var i = 0; i < xbooster.length; i++)
{
   
  boosterrdd = xbooster[i].id;
   var thenumxbooster = boosterrdd.replace( /^\D+/g, ''); 
  
   booster_col_pa(thenumxbooster);
}
  
  
 
  function booster_col_pa(boosteridp){
    
    
    
    var booster_xhttpss = new XMLHttpRequest();
  booster_xhttpss.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if(document.getElementById('shop-booster-pid-d-'+boosteridp)){
       var nrrr = document.getElementById('shop-booster-pid-d-'+boosteridp);
      nrrr.innerHTML = this.responseText;
    
      }
     
    }else{
      
       
    }
  };
   var booster_ele = document.getElementById("shopbooster-ali"); 
  booster_xhttpss.open("GET", "https://shopbooster.co/ali/rate.php?s="+Shopify.shop+"&idp="+boosteridp , true);
  booster_xhttpss.send();
    
    
    
    
    
  }
    
  }