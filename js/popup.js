function popup() {
  var popup = document.getElementsByClassName("popup-warning")[0];
  var popupInner = document.getElementsByClassName("inner-popup")[0];
  if (getComputedStyle(popup).display == "none") {
    popup.style.display = "block";
    popupInner.style.display = "block";
  } else {
    popup.style.display = "none";
    popupInner.style.display = "none";
  }
}
