function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function loadReviews() {
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var str = this.responseText;
      var res = replaceAll(str,"max-width:100%;\"", "max-width:100%;\" class=\"lazyload\" loading=\"lazy\" alt=\"Product review\"");
      res = replaceAll(res," src=\"media/2019/", " src=\"//shopbooster.co/ali/admin/default/media/2019/");
      res = replaceAll(res," src=\"media/2020/", " src=\"//shopbooster.co/ali/admin/default/media/2020/");
      res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/us.svg\"", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/us.svg?1107\" width=\"16\" height=\"12\" class=\"lazyload\" alt=\"United States Flag\" loading=\"lazy\"");
      res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/ca.svg\"", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/ca.svg?1107\" width=\"16\" height=\"12\" class=\"lazyload\" alt=\"Canada Flag\" loading=\"lazy\""); 
      res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/au.svg\"", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/au.svg?1107\" width=\"16\" height=\"12\" class=\"lazyload\" alt=\"Australia Flag\" loading=\"lazy\""); 
      res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/uk.svg\"", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/uk.svg?1107\" width=\"16\" height=\"12\" class=\"lazyload\" alt=\"United Kingdom Flag\" loading=\"lazy\""); 
      res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/nz.svg\"", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/nz.svg?1107\" width=\"16\" height=\"12\" class=\"lazyload\" alt=\"New Zealand Flag\" loading=\"lazy\""); 
      res = replaceAll(res,"https://shopbooster.co/ali/flags/flags/4x3/no.svg", "");
      res = replaceAll(res,"https://shopbooster.co/ali/webf/css/all2.css", "");     
      res = replaceAll(res,"https://shopbooster.co/ali/admin/default/shop-booster-grid.css", "");
      res = replaceAll(res,"//shopbooster.co/ali/admin/assets/media/logos/icon-logo2-bg.png", "");
      res = replaceAll(res,"https://www.shopbooster.co/ali/admin/default/templates/loading.gif\"", "https://cdn.shopify.com/s/files/1/0048/8642/9785/files/loading1.gif\" alt=\"Loading image\" loading=\"lazy\"");
      res = replaceAll(res,"https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/220px-Burj_Khalifa.jpg", "");
      res = replaceAll(res,"https://shopbooster.co/ali/admin/default/templates/p1.jpg", "");
      res = replaceAll(res,"style=\"width: 16px;\"", "width=\"16\" height=\"12\" class=\"lazyload\" alt=\"Review Country Flag\" loading=\"lazy\"");
      res = replaceAll(res,"src=", "data-src=");
      res = replaceAll(res,"<i class=\" fa fa-star ratte\"></i>", "⭐");
      

      

      document.getElementById("shopbooster-ali").innerHTML =res;
    }else{
      
      document.getElementById("shopbooster-ali").innerHTML ="" + this.statusText;
    }
  };
  if(document.getElementById("shopbooster-ali")){
  var booster_ele = document.getElementById("shopbooster-ali"); 
  xhttp.open("GET", "https://shopbooster.co/ali/comment.php?idp="+booster_ele.getAttribute("product-id")+"&s="+Shopify.shop, true);
  xhttp.send();
  }
  

//      const ll2 = new LazyLoad({
//        elements_selector: ".lazyload",
//      })   
      
}
 loadReviews();