/*-----------------------*/
TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".search", 1, {
    opacity: 0,
    delay: .5,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".menu", 1, {
    opacity: 0,
    delay: .6,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".title", 1, {
    opacity: 0,
    delay: 1,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".btn", 1, {
    opacity: 0,
    delay: 1.6,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".line-one", 1, {
    opacity: 0,
    delay: 2,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".line-two", 1, {
    opacity: 0,
    delay: 2.1,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".img", 2, {
    opacity: 0,
    delay: 1.9,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".year", 1, {
    opacity: 0,
    delay: 1.4,
    y: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".media ul li", 2, {
    opacity: 0,
    delay: 2.2,
    y: 40,
    ease: Expo.easeInOut
}, 0.2)
// -----------------------------------//
document.getElementById('playButton').addEventListener('click', function() {
    // Get the video element
    let video = document.getElementById('myVideo');
    
    // Make the video visible
    video.style.display = 'inline';
    video.loop = true;
    // Play the video
    video.play();
  
    
    // Hide the button
    this.style.display = 'none';
  });
// ------------------------------------//
