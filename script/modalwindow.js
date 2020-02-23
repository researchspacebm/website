// create references to the modal...
//var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
//var images = document.getElementsByClassName('myImages');
// the image in the modal
//var modalImg = document.getElementById("img01");
// and the caption in the modal
// captionText = document.getElementById("caption");

// Go through all of the images with our custom class
//for (var i = 0; i < images.length; i++) {
//  var img = images[i];
  // and attach our click listener for this image.
//  img.onclick = function(evt) {
//    console.log(evt);
//    modal.style.display = "block";
//    modalImg.src = this.src;
//    captionText.innerHTML = this.alt;
//  }
//}

//var span = document.getElementsByClassName("close")[0];

//span.onclick = function() {
//  modal.style.display = "none";
//}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function hi(e){
  modal.style.display = "block";
  modalImg.src = e.src;
  captionText.innerHTML = e.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
