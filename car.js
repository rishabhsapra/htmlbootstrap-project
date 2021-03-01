

// vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}

var alphaExp=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var emailExp=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
function valid()
{
	var x=document.getElementById('nm').value;
	var y=document.getElementById('em').value;
	var z=document.getElementById('ms').value;

	if(x=="")
	{
		alert("plz fill the form")
		document.getElementById('nm').focus();
		return false;
		}
	if(x.match(alphaExp))
	{
		document.getElementById('demo1').innerHTML="fill ur name"
		document.getElementById('nm').focus();
		return false;
	}
	if(y=="")
	{
		document.getElementById('demo2').innerHTML="fill ur email id";
		document.getElementById('em').focus();
		return false;
	}	
	// if(y.match(emailExp))
	// {
	// 	document.getElementById('demo2').innerHTML="required";
	// 	document.getElementById('em').focus();
	// 	return false;
	// }
	if(z=="")
	{
		document.getElementById('demo3').innerHTML="any msg";
		document.getElementById('ms').focus();
		return false;
	}
	if(z.match(alphaExp))
	{
	document.getElementById('demo3').innerHTML="any msg for queries";
	document.getElementById('ms').focus();
	return false;

	}
}
