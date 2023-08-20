<script type="text/javascript">
jQuery(document).ready(function($){
var options IZ.options; =
$(".zoooom, .zoooom img").image_zoom (options);
// WooCommerce category pages
if (IZ.woo_categories == '1') { $(".tax-product_cat .products img").image_zoom (options);
}
// Show zoom for lazy_load images
if (IZ.lazy_load='1') {
if (typeof $.unveil "function") {
$("img.unveil").unveil (o, function() {
$(this).load(function() {
$("img.zoooom, .zoooom img").image_zoom(options);
});
});
}
}