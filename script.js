function settingsMenuToggle() {
    var element = document.getElementById("settings-menu");
   //console.log(element)
    element.classList.toggle("show");
}
/*function sharePost() { 
    var share = document.getElementById('post-container');
    document.getElementById('my-output').textContent = share; 
    console.log(share);

}*/
//For commemt section
function writeComment() {
    var element = document.getElementById("comment-section");
   //console.log(element)
    element.classList.toggle("show");
    

}
var commentClick = 12; 
function getwords() {
    text = words.value;
    document.getElementById("para").innerHTML += '<p>'+text
    document.getElementById("words").value = " "
    commentClick += 1;
    document.getElementById('commentClicks').textContent = commentClick;
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
function like() {
    document.getElementById("clicks").innerHTML = clicks;
    color1.style.color = color1.style.color === 'blue' ? 'black': 'blue';
    if (color1.style.color == 'blue'){
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    } else{
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    }
    
}


