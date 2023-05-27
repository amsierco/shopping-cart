var zaius=zaius||[];zaius.methods=["initialize","onload","event","entity","identify","anonymize","dispatch"];zaius.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);zaius.push(t);return zaius}};(function(){for(var i=0;i<zaius.methods.length;i++){var method=zaius.methods[i];zaius[method]=zaius.factory(method)}var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=("https:"===document.location.protocol?"https://":"http://")+"d1igp3oop3iho5.cloudfront.net/v2/GOtPH_9jKB-sRzS0PcPKhQ/zaius-min.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();

var zaiusShopify = {
  getCookie: function(name) {
    var i, x, y, cookies = document.cookie.split(';');
    for (i = 0; i < cookies.length; i++) {
      x = cookies[i].substr(0, cookies[i].indexOf('='));
      y = cookies[i].substr(cookies[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, '');
      if (x == name) {
        try {
          return decodeURIComponent(y);
        } catch(e) {
          return unescape(y);
        }
      }
    }
  }
};

// Only track interactions on non-checkout pages
if (window.location.hostname.match(/checkout\.shopify\.com/) == null) {
  // If the cart cookie is sent, include the cartId in the call to zaius
  // this is needed to associate cart and order events with the web session
  var params = {};
  var productParams = {};
  var cartId = zaiusShopify.getCookie("cart");
  var idField = "shopify_potomac_river_running_id" == "" ? "customer_id" : "shopify_potomac_river_running_id";
  var cartTokenField = "shopify_cart_potomac_river_running_token" == "" ? "zaius_alias_shopify_cart_id" : "shopify_cart_potomac_river_running_token";
  if (cartId != null) {
    params[cartTokenField] = cartId;
    params.zaius_alias_shopify_cart_id = cartId;
  }
  if (typeof __st == "object" && __st.cid != null) {
    params[idField] = __st.cid;
    params.customer_id = __st.cid;
    productParams[idField] = __st.cid;
    productParams.customer_id = __st.cid;
  }
  zaius.event("pageview", params);

  // If this is product detail view
  if (window.location.pathname.match(/products/) != null && ShopifyAnalytics.meta.product) {
    productParams.action = "detail";
    productParams.product_id = ShopifyAnalytics.meta.product.id;
    zaius.event("product", productParams);
  }
}
