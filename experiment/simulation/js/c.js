function s3()
{
	
	var image1 = document.getElementById('i1');
	
	var image2 = document.getElementById('i2');
	
	var image3 = document.getElementById('i3');
	
	var image4 = document.getElementById('i4');
	
	var image5 = document.getElementById('i5');
	
	var image6 = document.getElementById('i6');
	
	var image7 = document.getElementById('i7');
	
	if(image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png")
	{
		
		document.getElementById("i8").src="images/seven.jpg";
	}
	else if(image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/off.png")
	{
		
		document.getElementById("i8").src="images/three.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/five.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/six.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/off.png" && image2.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/nine.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/two.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/off.png" && image2.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/eight.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/off.png" && image3.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/one.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/four.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/off.png" && image1.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/zero.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image2.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/ten.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/eleven.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image3.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/twelve.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/thirt.jpg";
	}
	else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/fort.jpg";
	}else if (image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/img3.jpg";
	}
	else if (image5.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/on.png" && image1.getAttribute('src')=="images/off.png" && image2.getAttribute('src')=="images/off.png" && image3.getAttribute('src')=="images/off.png" && image4.getAttribute('src')=="images/off.png")
	{
		document.getElementById("i8").src="images/eight.jpg";
	}
	else
	{
	document.getElementById("i8").src="images/img3.jpg";	
	}
}
function a1() {
    	var image = document.getElementById('i1');		
    	if (image.getAttribute('src')=="images/off.png") 
	{
        image.src = "images/on.png";		
    	} 
	else
	{
        image.src = "images/off.png";
    	}
s3();
}

function a2() {
    var image = document.getElementById('i2');
    if (image.getAttribute('src')=="images/off.png") {
        image.src = "images/on.png";
	
    } else {
        image.src = "images/off.png";
    }
s3();
}

function a3() {
    var image = document.getElementById('i3');
    if (image.getAttribute('src')=="images/off.png") {
        image.src = "images/on.png";
    } else {
        image.src = "images/off.png";
    }
s3();
}
function a4() {
    var image = document.getElementById('i4');
    if (image.getAttribute('src')=="images/off.png") {
        image.src = "images/on.png";
    } else {
        image.src = "images/off.png";
    }
s3();
}
function a5() {
    var image = document.getElementById('i5');
    if (image.getAttribute('src')=="images/off.png") {
        image.src = "images/on.png";
    } else {
        image.src = "images/off.png";
    }
s3();
}
function a6() {
    var image = document.getElementById('i6');
    if (image.getAttribute('src')=="images/off.png") {
        image.src = "images/on.png";
    } else {
        image.src = "images/off.png";
    }
s3();
}
function a7() {
    var image = document.getElementById('i7');
    if (image.getAttribute('src')=="images/off.png") {
        image.src = "images/on.png";
    } else {
        image.src = "images/off.png";
    }
s3();
}
