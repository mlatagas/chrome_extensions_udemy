//remove all scratched out prices and % signs
//Todo figure out how to do this on page load
$(".my-saving").remove();
$(".group.wg").remove();

// badge saving
//<div class="my-saving __web-inspector-hide-shortcut__">27% Off</div>
/* <p class="price-was list-price-info __web-inspector-hide-shortcut__"><del class="old-price">R 184</del></p> */
/* <span class="list-price-info-icon list-price-info __web-inspector-hide-shortcut__" deluminate_imagetype="unknown"></span> */
// <p class="deal-qty lt-10 __web-inspector-hide-shortcut__" data-reactid=".0.2.2.a.3.1"><span data-reactid=".0.2.2.a.3.1.0">Only </span><span class="qty-count" data-reactid=".0.2.2.a.3.1.1">13</span><span data-reactid=".0.2.2.a.3.1.2"> Left</span></p>
