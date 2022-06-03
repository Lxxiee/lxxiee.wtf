window.onload = displayImage;

var imagesArray = [
"anime  (1).gif",
"anime  (2).gif",
"anime  (3).gif",
"anime  (4).gif",
"anime  (5).gif",
"anime  (1).jpg",
"anime  (2).jpg",
"anime  (3).jpg",
"anime  (4).jpg",
"anime  (1).webp"
];

function displayImage(){
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/img/animes/" + imagesArray[num];
}
