// JS Goes here - ES6 supported

var $screenshotBottom = document.getElementById("sbv-screenshot-bottom");
var $screenshotTop = document.getElementById("sbv-screenshot-top");
var $intercomLink = document.getElementById("intercomLink");
var $blurClass = "swal-blur";

function showDefaultHowPopup() {
  var imgUrl = "https://static.vince.run/scrum/scrumbyvince-animation.gif";
  showHowPopup(imgUrl, 638);
}

function showHowPopup(src, modalmaxwidth) {
  var date = new Date()
  var html = '<div><img style="width: 100%; height: 100%" src="' + src + "?v=" + date.getTime() + '"/></div>';
  swal({
    title: "",
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: false,
    html: html,
    customClass: "popup-how",
    onOpen: function() {
      document.getElementById("wrap").className = $blurClass;
    },
    onClose: function() {
      document.getElementById("wrap").className = "";
    }
  });

  if (modalmaxwidth != null) {
    var modal = document.getElementsByClassName("swal2-modal")[0];
    modal.style.maxWidth = modalmaxwidth + "px";
  }
}

if ($screenshotBottom != null && $screenshotTop != null) {
  $screenshotBottom.addEventListener("click", showDefaultHowPopup);
  $screenshotTop.addEventListener("click", showDefaultHowPopup);
}

if ($intercomLink != null) {
  $intercomLink.addEventListener("click", showIntercomPopup);
}

function showIntercomPopup() {
  window.Intercom("show");
}
