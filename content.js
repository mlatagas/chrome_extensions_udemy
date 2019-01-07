console.log(window.location.host);

if (window.location.host === "www.takealot.com") {
  //remove all scratched out prices and % signs

  var paras = document.getElementsByClassName(
    "my-saving __web-inspector-hide-shortcut__"
  );

  while (paras[0]) {
    paras[0].parentNode.removeChild(paras[0]);
  }
}

//<div class="my-saving __web-inspector-hide-shortcut__">27% Off</div>
/* <p class="price-was list-price-info __web-inspector-hide-shortcut__"><del class="old-price">R 184</del></p> */
/* <span class="list-price-info-icon list-price-info __web-inspector-hide-shortcut__" deluminate_imagetype="unknown"></span> */
