var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            console.log('>>>>> right swipe');
        } else {
            console.log('>>>>> left swipe');
        }
    } else {
        if (yDiff > 0) {
            console.log('>>>>> down swipe');
        } else {
            console.log('>>>>> up swipe');
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};


function addSwipeListener(element) {
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);
}
