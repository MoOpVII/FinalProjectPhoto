/*Name this external file gallery.js*/

function upDate(previewPic){
	
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
	}

	function unDo(){

    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
	}

function focusFunction() {
    console.log("Input focused");
}

function blurFunction() {
    console.log("Input blurred");
}

function init() {
    console.log("Page loaded");
    var images = document.querySelectorAll('.preview');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}
