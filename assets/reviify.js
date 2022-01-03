
var shopboosterstopimage=0; 
var shopboosterstopimagetotal = 9; 
var shopboosterstopchange = 0;
   var booster_gal_visible = false;
   var shopboosterMaxHeight = 3000;
    var shopboosterMinHeight = 300;
   var boosterEE = 0;
   var booster_filesToUpload = [];
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        boostergalleryprev();
    }
    else if (e.keyCode == '27') {
        boostergalleryhide();
    }
    else if (e.keyCode == '40') {
        boostergallerynext();
    }
    else if (e.keyCode == '37') {
       boostergalleryprev();
    }
    else if (e.keyCode == '39') {
       boostergallerynext();
    }

}
   function Boosterclickrate(a){
     document.getElementById('booster_rate').value=a;
         var booster_rate = document.getElementById("booster-i-rate");
    var booster_rate_items = booster_rate.getElementsByTagName('i');
     
    for (i = 0; i < a; i++) {
      booster_rate_items[i].classList.add("bootstrap-yellow");
    }  

     
     
   }
   
   function booster_hover(){
     a = document.getElementById('booster_rate').value;
      
         var booster_rate = document.getElementById("booster-i-rate");
    var booster_rate_items = booster_rate.getElementsByTagName('i');
     
    for (i = 0; i < a; i++) {
      
      booster_rate_items[i].classList.remove("bootstrap-yellow");
    }  
     
   }
   
   function booster_out(){
       
     a = document.getElementById('booster_rate').value;
    
         var booster_rate = document.getElementById("booster-i-rate");
    var booster_rate_items = booster_rate.getElementsByTagName('i');
     
    for (i = 0; i < a; i++) {
      
      booster_rate_items[i].classList.add("bootstrap-yellow");
    } 
      for (i = a; i < 5; i++) {
      
      booster_rate_items[i].classList.remove("bootstrap-yellow"); 
    } 
     
   }
  
   function sboost_show_console2(ele) {
      shopboostersss++;
    var fadeTargetggg = ele;
    var fadeEffectggg = setInterval(function () {
        
        if (fadeTargetggg.style.opacity < 1) {
            fadeTargetggg.style.opacity = +fadeTargetggg.style.opacity + +0.1;
        } else {
            clearInterval(fadeEffectggg);
            
          shopboosterlock = false;
            shopboostersss = 1;
           
        }
    }, 10);
       
     
}
   
 function booster_chooseFile() {
      document.getElementById("booster_fileInput").click();
   }
 
   function booster_showAdd() {
       var elem = document.getElementById("booster_add_rating");  
     if(booster_gal_visible == false){
 
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos >= document.getElementById("booster_add_rating_inner").offsetHeight) {
      clearInterval(id);
      booster_gal_visible = true;
    } else {
      pos += 14; 
      elem.style.height = pos + "px"; 
      
    }
  }
     
     }else{
         
  var posd = document.getElementById("booster_add_rating_inner").offsetHeight;
  var idd = setInterval(framed, 5);
  function framed() {
    if (posd <= 0) {
      clearInterval(idd);
      booster_gal_visible = false;
    } else {
      posd -= 14; 
      if(posd<0){
        posd=0;
      }
      elem.style.height = posd + "px"; 
      
    }
  }
       
     }
     
}
   
   
      function sboost_hide_console2(ele) {
           
    var fadeTargetcccc = ele;
       // alert('sdsd');
    var fadeEffectcccc = setInterval(function () {
      shopboostersss++;
        if (!fadeTargetcccc.style.opacity) {
            fadeTargetcccc.style.opacity = 1;
        }
        if (fadeTargetcccc.style.opacity > 0) {
            fadeTargetcccc.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffectcccc);
           
          shopboosterlock = false;
            shopboostersss = 1;
           
        }
    }, 10);
        
           
}
   var shopboosterlock = false;
	var shopboostersss = 1;

   function sboost_hide_console(){
     if(shopboosterlock == false){
     shopboosterlock = true;
       ddd= document.getElementsByClassName("sbooster_console")[0];
       sboost_hide_console2(ddd);
       ddd= document.getElementsByClassName("sbooster_console")[1];
       sboost_hide_console2(ddd);
       ddd= document.getElementsByClassName("sbooster_console")[2];
       sboost_hide_console2(ddd);
       ddd= document.getElementsByClassName("sbooster_console")[3];
       sboost_hide_console2(ddd);
     }
     
   }
   
   function sboost_show_console(){
      if(shopboosterlock == false){
         shopboosterlock = true;
         ddd2= document.getElementsByClassName("sbooster_console")[0];
         sboost_show_console2(ddd2);
         ddd3= document.getElementsByClassName("sbooster_console")[1];
         sboost_show_console2(ddd3);
         ddd4= document.getElementsByClassName("sbooster_console")[2];
         sboost_show_console2(ddd4);
         ddd5= document.getElementsByClassName("sbooster_console")[3];
         sboost_show_console2(ddd5);
      }
     
   }
   
   
   
   function shopboosterfadeOutEffect() {
     document.getElementById("booster_loading").style.display = "flex";
    var fadeTarget = document.getElementById("shopboostermainimage");
    var fadeEffect = setInterval(function () {
       
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
          if(boosternext){
           if( shopboosterstopimage == -1){
      shopboosterstopimage = 0;
           }else{
          shopboosterstopimage++;
           }
          }else{
             if( shopboosterstopimage == 0){
                
      shopboosterstopimage = shopboosterstopimagetotal-1;
           }else{
              
          shopboosterstopimage--;
           }
          }
         
  var nrrr = document.getElementById('shopboosterimages');
    deee = nrrr.getElementsByTagName('img')[shopboosterstopimage];
          
        
    
  var nrrrf = document.getElementById('shopboostermainimage');
    //deeef = nrrrf.getElementsByTagName('img')[0];
   
          nrrrf.innerHTML = "<img id='shopboostermainimagetag' src='"+deee.src+"' class=\"lazy\" style='max-height:"+shopboosterMaxHeight+"px ' loading=\"lazy\">";    
          
       shopboosterfadeinEffect() ;   
 /* deeef.src = deee.src;
          if (deeef.complete) {
   shopboosterfadeinEffect() ;
} else {
  deeef.addEventListener('load', shopboosterfadeinEffect);
  deeef.addEventListener('error', function() {
       
  })
}*/
            
        }
    }, 30);
}
 
  

function shopboosterfadeinEffect() {
   document.getElementById("booster_loading").style.display = "none";
    var fadeTargets = document.getElementById("shopboostermainimage");
    var fadeEffectss = setInterval(function () {
        if (!fadeTargets.style.opacity || fadeTargets.style.opacity==0) {
            fadeTargets.style.opacity = 0.2;
           
        }
        if (fadeTargets.style.opacity < 1) {
            fadeTargets.style.opacity = +fadeTargets.style.opacity + + 0.1;
          
        } else {
          fadeTargets.style.opacity  = 1;
            clearInterval(fadeEffectss);
          shopboosterstopchange=0;
          boosterResize();
        }
    
    }, 30);
}

   var boosternext= false;
function boostergalleryprev(){
 
  if(shopboosterstopchange == 0){
    boosternext= false;
     
    shopboosterstopchange=1;
  shopboosterfadeOutEffect() ;

 
  }
  
   return 0;
	
}
function boostergallerynext(){
 
  if(shopboosterstopchange == 0){
    boosternext= true;
    if( shopboosterstopimage >= Number(shopboosterstopimagetotal)-1 ){
      shopboosterstopimage = -1;
    }
    shopboosterstopchange=1;
  shopboosterfadeOutEffect() ;

 
  }
   
   return 0;
	
}

function boostergalleryshow(param){
  document.body.style.overflow = "hidden";
  shopboosterstopimage=0; 
  
 shopboosterstopchange = 0;
 
  if(document.getElementById('booster-review-'+param+'-name')){
  document.getElementById('booster-review-gen-name').innerHTML = document.getElementById('booster-review-'+param+'-name').innerHTML;
  }else{
    document.getElementById('booster-review-gen-name').innerHTML = "";
  }
  
   if(document.getElementById('booster-review-'+param+'-country')){
  document.getElementById('booster-review-gen-country').innerHTML = document.getElementById('booster-review-'+param+'-country').innerHTML;
  }else{
    document.getElementById('booster-review-gen-country').innerHTML = "";
  }
  
  if(document.getElementById('booster-review-'+param+'-stars')){
  document.getElementById('booster-review-gen-stars').innerHTML = document.getElementById('booster-review-'+param+'-stars').innerHTML;
  }else{
    document.getElementById('booster-review-gen-stars').innerHTML = "";
  }
  
  if(document.getElementById('booster-review-'+param+'-date')){
  document.getElementById('booster-review-gen-date').innerHTML = document.getElementById('booster-review-'+param+'-date').innerHTML;
  }else{
    document.getElementById('booster-review-gen-date').innerHTML = "";
  }
  
  if(document.getElementById('booster-review-'+param+'-comment')){
  document.getElementById('booster-review-gen-comment').innerHTML = document.getElementById('booster-review-'+param+'-comment').innerHTML;
  }else{
    document.getElementById('booster-review-gen-comment').innerHTML = "";
  }
  
  if(document.getElementById('booster-review-'+param+'-profile-image2')){
  document.getElementById('booster-review-gen-profile-image').innerHTML = document.getElementById('booster-review-'+param+'-profile-image2').innerHTML;
  }else{
    document.getElementById('booster-review-gen-profile-image').innerHTML = "";
  }
  
  
  
  
  
  
  
  
  var xhttpss = new XMLHttpRequest();
  xhttpss.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
       var nrrr = document.getElementById('shopboosterimages');
      nrrr.innerHTML = this.responseText;
     deeedd = nrrr.getElementsByTagName('img')[shopboosterstopimage];
         shopboosterstopimagetotal  = nrrr.getElementsByTagName("IMG").length;
      //alert(shopboosterstopimagetotal);
       
    
  var nrrrf = document.getElementById('shopboostermainimage');
    //deeef = nrrrf.getElementsByTagName('img')[0];
   
        nrrrf.innerHTML = "<img id='shopboostermainimagetag' src='"+deeedd.src+"' class=\"lazy\" style='max-height:"+shopboosterMaxHeight+"px' loading=\"lazy\">"; 
	document.getElementById('shop-booster-gallery').style.display= "block";
  boosterResize();
      
     
    }else{
      
       
    }
  };
  
 
  xhttpss.open("GET", "https://shopbooster.co/ali/comment-images.php?idp="+param, true);
  xhttpss.send();
  
  
  
  
  
  
  
  
}

function boostergalleryhide(){
   document.body.style.overflow = "auto";
    
	document.getElementById('shop-booster-gallery').style.display = "none";
	
}
   function boosterResize(){
     
     shopboosterMaxHeight = document.documentElement.clientHeight-200;
     
     if(shopboosterMaxHeight<500){
       shopboosterMaxHeight = document.documentElement.clientHeight-100;
     
     }
     if(shopboosterMaxHeight<=300){
       shopboosterMinHeight= 300;
       shopboosterMaxHeight = 300;
     }
	 if(document.getElementById("shopboostermainimagetag")){
     shopboosterHeight = document.getElementById("shopboostermainimagetag").height;
	
     if(shopboosterHeight>=shopboosterMaxHeight){
       shopboosterMinHeight = shopboosterMaxHeight;
     }else{
       if(shopboosterHeight > shopboosterMinHeight){
       shopboosterMinHeight = shopboosterHeight;
       }
       
     }
      }
     if(document.getElementById("booster-cont-1")){ 
     document.getElementById("booster-cont-1").style.minWidth  = (document.body.clientWidth-100)+ "px"; 
    document.getElementById("booster-cont-2").style.minWidth  = (document.body.clientWidth-100)+ "px";
   
     
     document.getElementById("booster-cont-1").style.minHeight  = shopboosterMinHeight+ "px"; 
    document.getElementById("booster-cont-2").style.minHeight  = shopboosterMinHeight+ "px";
         
     document.getElementById("shopboostermainimage").style.minHeight  = shopboosterMinHeight+ "px"; 
     document.getElementById("shopboostermainimage").style.maxHeight  = shopboosterMinHeight+ "px"; 
     document.getElementById("shopboostermainimage").style.overflow  =  "hidden"; 
	 }
         if(document.getElementById("shopboostermainimagetag")){  
     document.getElementById("shopboostermainimagetag").style.maxHeight  = shopboosterMinHeight+ "px"; 
	 }
    
   }
  
window.onload = function(){
	
    document.getElementById('booster_rate').value = 5;
   booster_out();
   
  boosterResize();
  BoosterclickrateUpdate();
 
  
};  
   window.onresize = function(){
   boosterResize();
   };

   
TODEL = 0;
  function booster_delete_upload(a){
     TODEL++; 
      
     document.getElementById("booster-upload-container-"+a).remove();
     
    for(var i = 0; i < booster_filesToUpload.length; i++) {
    if(booster_filesToUpload[i].id == a) {
        booster_filesToUpload.splice(i, 1);
        break;
    }
}
    //alert(JSON.stringify(booster_filesToUpload));
     
   }
   
   
   function process(key,value) {
     
}

function traverse(o,func) {
    for (var i in o) {
        func.apply(this,[i,o[i]]);  
        if (o[i] !== null && typeof(o[i])=="object") {
            //going one step down in the object tree!!
            traverse(o[i],func);
        }
    }
}

//that's all... no magic, no bloated framework

        function readURL(input) {
            if (input.files && input.files[0]) {
              //document.getElementById("booster-show-image").innerHTML = "";
              
               
              
               for(f=0 ; f < input.files.length ; f++){
                 
                   
            
                var reader = new FileReader();

                reader.onload = function (e) {
                    
                  booster_max_image_upload = document.getElementById("booster_max_image_upload").value;
                 
if( +boosterEE + -TODEL >= booster_max_image_upload){
	
}else{
				 document.getElementById("booster-show-image").innerHTML+=
                    "<div class='booster-upload-container' id='booster-upload-container-"+boosterEE+"'><div onclick='booster_delete_upload("+boosterEE+")' style='position:absolute;padding:5px;cursor:pointer;z-index: 10000000;margin-right: 0;margin-left: 120px;color: #717171;'><i class=' fa fa-times'></i></div><img class='booster-upload-show lazy' src='"+e.target.result+"'  loading=\"lazy\"/></div>";
                booster_filesToUpload.push({
                id: boosterEE,
                file: e.target.result
            });
                  //alert(JSON.stringify(e));
                  //traverse(e,process);
                 //alert(JSON.stringify(booster_filesToUpload));
                boosterEE++;
}
                 
        
        document.getElementById("booster_add_rating").style.height = document.getElementById("booster_add_rating_inner").offsetHeight+"px";
                
                
                };
             
                reader.readAsDataURL(input.files[f]);
              }
            }
        }
   
   function booster_validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
   
   function booster_sbm_review(){
     if (document.contains(document.getElementById("booster-add-rew-succ"))) {
            //document.getElementById("booster-add-rew-succ").remove();
         document.getElementById("booster-add-rew-succ").style.display='none';
} 
     if (document.contains(document.getElementById("booster-add-rew-err"))) {
            document.getElementById("booster-add-rew-err").remove();
} 
     var allOK = true;
     var paras = document.getElementsByClassName('booster-red-text');
ddxx = 0;
while(ddxx<3) {
    paras[ddxx].style.display='none';
  ddxx++;
}
     
     if(document.getElementById("booster-your-name").value== ""){
       allOK = false;
       /*var node = document.createElement("div");
  var textnode = document.createTextNode("This field is required");
  node.appendChild(textnode);
       node.className = "booster-red-text";
  document.getElementById("booster-your-name-div").appendChild(node);*/
       
       document.getElementById("booster-thfir").style.display = "block";
     }
     
     if(document.getElementById("booster-your-email").value!= "" && !booster_validateEmail(document.getElementById("booster-your-email").value)){
       allOK = false;
       /*var node = document.createElement("div");
  var textnode = document.createTextNode("Invalid email format");
  node.appendChild(textnode);
       node.className = "booster-red-text";
  document.getElementById("booster-your-email-div").appendChild(node);*/
       
       document.getElementById("booster-ief").style.display = "block";
     }
     
     
     if(document.getElementById("booster-your-message").value== ""){
       allOK = false;
       /*var node = document.createElement("div");
  var textnode = document.createTextNode("This field is required");
  node.appendChild(textnode);
       node.className = "booster-red-text";
  document.getElementById("booster-your-message-div").appendChild(node);*/
       
       document.getElementById("booster-thfir2").style.display = "block";
     }
     document.getElementById("booster_add_rating").style.height = document.getElementById("booster_add_rating_inner").offsetHeight+"px";
    
     
     if(allOK){
        
      
       var newItemd = document.createElement("div");
  
  newItemd.setAttribute("id", "booster-add-rew-loading");

       newItemd.innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0048/8642/9785/files/loading1.gif?v=1577377124" class=\"lazy\" width="100px">';
       
     newItemd.style.height = document.getElementById("booster_add_rating_inner").offsetHeight+"px";
       newItemd.style.width = document.getElementById("booster_add_rating_inner").offsetWidth+"px";
       
  var listd = document.getElementById("booster_add_rating");
  listd.insertBefore(newItemd, listd.childNodes[0]);
       
       
       
       var json_upload =   JSON.stringify({name:document.getElementById("booster-your-name").value, email:document.getElementById("booster-your-email").value,rating:document.getElementById("booster_rate").value, message:document.getElementById("booster-your-message").value,"photos":booster_filesToUpload});
var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
var booster_ele = document.getElementById("shopbooster-ali"); 
 
       xmlhttp.open("POST", "https://shopbooster.co/ali/admin/default/adrw.php?isp="+booster_ele.getAttribute("product-id"));
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
           xmlhttp.onload = function(e){
         
        document.getElementById("booster-add-rew-loading").remove();
          /*var newItemds = document.createElement("div");
  
  newItemds.setAttribute("id", "booster-add-rew-succ");

       newItemds.innerHTML = 'Success';
       
     //newItemd.style.height = document.getElementById("booster_add_rating_inner").offsetHeight+"px";
       newItemds.style.width = "100%";*/
             
    document.getElementById("booster-add-rew-succ").style.display='block';         
       
  var listds = document.getElementById("booster_add_rating_inner");
  //listds.insertBefore(newItemds, listds.childNodes[0]);
             document.getElementById("booster-your-email").value = "";
             document.getElementById("booster-your-message").value = "";
             document.getElementById("booster-your-name").value ="";
             document.getElementById("booster-show-image").innerHTML = "";
             document.getElementById('booster_rate').value = 5;
             booster_filesToUpload = [];
      document.getElementById("booster_add_rating_inner").style.height = "min-content";
    
             
             document.getElementById("booster_add_rating").style.height = document.getElementById("booster_add_rating_inner").offsetHeight+"px";
    
   booster_out();
         //location.href = "#shop-booster";
             booster_smoothScroll("shop-booster");
            
             
       }
           booster_smoothScroll("booster_add_rating_inner");
           //location.href = "#booster_add_rating_inner";
           xmlhttp.onerror = function() {
             document.getElementById("booster-add-rew-loading").remove();
          var newItemdsErr = document.createElement("div");
  
  newItemdsErr.setAttribute("id", "booster-add-rew-err");
             newItemdsErr.innerHTML = 'Error';
       
     //newItemd.style.height = document.getElementById("booster_add_rating_inner").offsetHeight+"px";
       newItemdsErr.style.width = "100%";
       
  var listdsErr = document.getElementById("booster_add_rating_inner");
  listdsErr.insertBefore(newItemdsErr, listdsErr.childNodes[0]);
             
             
           document.getElementById("booster-add-rew-loading").style.display= "none";
             document.getElementById("booster-add-rew-loading").style.height = document.getElementById("booster_add_rating_inner").offsetHeight+"px";
     document.getElementById("booster_add_rating").style.height = document.getElementById("booster_add_rating_inner").offsetHeight+"px";
    
   booster_out();
 
};
           

xmlhttp.send(json_upload);
       
 
       
       
     }
     
   }
   
   function booster_currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function booster_elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function booster_smoothScroll(eID) {
    var startY = booster_currentYPosition();
    var stopY = booster_elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    /*if (distance < 100) {
        scrollTo(0, stopY); return;
    }*/
    var speed = Math.round(distance / 50);
    if (speed >= 50) speed = 50;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
   
   
   function booster_lkdslk(a,b,c,d){
     
     if(b!=""){
      X = "&lk=1" ;
       document.getElementById('booster-like-'+d+'-1').classList.add("booster-ccc");
       document.getElementById('booster-like-'+d+'-2').classList.add("booster-ccc");
       
       document.getElementById('booster-dislike-'+d+'-1').classList.remove("booster-ccc");
       document.getElementById('booster-dislike-'+d+'-2').classList.remove("booster-ccc");
       
     }else{
       X = "&dslk=1" ;
       
       document.getElementById('booster-dislike-'+d+'-1').classList.add("booster-ccc");
       document.getElementById('booster-dislike-'+d+'-2').classList.add("booster-ccc");
       
          document.getElementById('booster-like-'+d+'-1').classList.remove("booster-ccc");
       document.getElementById('booster-like-'+d+'-2').classList.remove("booster-ccc");
     }
     
     
  
  
  var xhttpss = new XMLHttpRequest();
  xhttpss.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
       var nrrr = document.getElementById('booster-lk-dslk-'+d);
      nrrr.innerHTML = this.responseText;
    
      
     
    }else{
      
       
    }
  };
  
 
  xhttpss.open("GET", "https://shopbooster.co/ali/lkdslk.php?ir="+a+""+X, true);
  xhttpss.send();
  
     
     
   }
  booster_page_number = 0;
   
    
   
   function booster_chpage(page,idp){
     
     if(booster_page_number != page){
       
      
       
            //var booster_rate = document.getElementById("booster-results-frx");
    var booster_rate_items = document.getElementsByClassName('booster-page-number');
     
    for (i = 0; i < booster_rate_items.length; i++) {
      
      booster_rate_items[i].classList.remove("booster-page-number-active");
    } 
       
   booster_rate2 = document.getElementById("booster-page-number-"+page);  
      booster_rate2.classList.add("booster-page-number-active");
       
        booster_smoothScroll("booster-results-frx");
     booster_page_number = page;
     
      var xhttpss = new XMLHttpRequest();
  xhttpss.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
       var nrrr = document.getElementById('booster-results-frx');
      var res = this.responseText;
//       res = replaceAll(res," src=\"media/2019/", " src=\"//shopbooster.co/ali/admin/default/media/2019/");
//       res = replaceAll(res," src=\"media/2020/", " src=\"//shopbooster.co/ali/admin/default/media/2020/");
//       res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/us.svg", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/us.svg?1107\" class=\"lazy\"");
//       res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/ca.svg", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/ca.svg?1107\" class=\"lazy\""); 
//       res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/au.svg", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/au.svg?1107\" class=\"lazy\""); 
//       res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/uk.svg", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/uk.svg?1107\" class=\"lazy\""); 
//       res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/nz.svg", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/nz.svg?1107\" class=\"lazy\""); 
//       res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/no.svg", "");
//       res = replaceAll(res,"style=\"width: 16px;\"", "width=\"16\" height=\"12\"");

          
          
          
      nrrr.innerHTML = res;
    
      
     
    }else{
      
       
    }
  };
  shop_booster_Layout_style = document.getElementById('shop_booster_Layout_style').value;
 
  xhttpss.open("GET", "https://shopbooster.co/ali/admin/default/templates/"+shop_booster_Layout_style+".php?page="+page+"&idp="+idp, true);
  xhttpss.send();
     }
     
     
     
   }
   
   
   
    function booster_getElements(attrib,atrvalue) {
    // get all dom elements
    var elements = document.getElementsByTagName("h2");
	 
    // initialize array to put matching elements into
    var foundelements = [];

    // loop through all elements in document
    for (var i = 0; i < elements.length; i++) {
        // check to see if element has any attributes
        if (elements[i].attributes.length > 0) {
            // loop through element's attributes  and add it to array if it matches attribute from argument
            for (var x = 0; x < elements[i].attributes.length; x++) {
                if (elements[i].attributes[x].name === attrib && elements[i].getAttribute(attrib)== atrvalue ) {
                    foundelements.push(elements[i]);
                }
            }
        }
    }
	 
    return foundelements[0];
}
   
   function booster_insertAfter(newNode, referenceNode) {
     

// Get the reference node
var referenceNode = document.querySelector(newNode);

 
}
   
   
    
   var booster_el = document.getElementById("AddToCartForm-product-template");
    // Make a new div
    booster_elChild = document.createElement('div');

// Give the new div some content
//booster_elChild.innerHTML = '<div id="shop_booster_rate_6"></div>';

// Jug it into the parent element
//booster_el.before(booster_elChild);
   
	  
     
      var booster_xhttpss = new XMLHttpRequest();
  booster_xhttpss.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if(document.getElementById('shop_booster_rate_6')){
       var nrrr = document.getElementById('shop_booster_rate_6');
      nrrr.innerHTML = this.responseText;
    
      }
     
    }else{
      
       
    }
  };
   var booster_ele = document.getElementById("shopbooster-ali"); 
//   booster_xhttpss.open("GET", "https://shopbooster.co/ali/rate.php?s="+Shopify.shop+"&idp="+booster_ele.getAttribute("product-id") , true);
//   booster_xhttpss.send();
	 