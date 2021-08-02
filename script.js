function settingsMenuToggle() {
  var element = document.getElementById("settings-menu");
  //console.log(element)
  element.classList.toggle("show");
}

function writeComment(event) {
  event.path[4].childNodes[7].classList.toggle("show");
}
var commentClick = 12;
function getwords(event) {
  if (event.keyCode == 13 || event.which == 13) {
    text = event.target.value;
    console.log(event)
    event.path[3].childNodes[11].innerHTML += "<p>" + text;
    // document.getElementById("para").innerHTML += "<p>" + text;
    //console.log(event.target.value)
    //event.target.value = "";
    //  path[3].childNodes[5].childNodes[1].childNodes[3].children[1]. += 1;
    //document.getElementById("commentClicks").textContent = commentClick;
  }
}
//For share post
var share = 20;
function sharePost() {
  var itm = document.getElementById("post-container");
  var cln = itm.cloneNode(true);
  document.getElementById("output").appendChild(cln);
  share += 1;
  document.getElementById("shareNumber").textContent = share;
}
// For like button
var color1 = document.getElementsByClassName("fa-thumbs-up")[0];
var clicks = 120;
function like(event) {
  console.log(event.path[1].children[1]);
  event.path[1].children[1].innerHTML = color1;

  //document.getElementById("clicks").innerHTML = clicks;
  color1.style.color = color1.style.color === "blue" ? "black" : "blue";
  if (color1.style.color == "blue") {
    //clicks += 1;
    event.path[1].children[1].innerHTML = clicks + 1;
    //document.getElementById("clicks").innerHTML = clicks;
  } else {
    //clicks -= 1;
    event.path[1].children[1].innerHTML = clicks;
    //document.getElementById("clicks").innerHTML = clicks;
  }
}
