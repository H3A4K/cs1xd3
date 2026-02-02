/**
 * This code adds event listeners to the DOM. It does everything inside
 * an anonymous function when the load event triggers. This is to make sure
 * that the DOM is fully built before we begin to add our listeners to it.
 * 
 * Sam Scott, Mohawk College, 2019
 */
window.addEventListener("load", function() {

    let msg = document.getElementById("message");
    let pic = document.getElementById("pic");

    msg.addEventListener("click", dropHeading);

    pic.addEventListener("mouseover", changePicture);

    pic.addEventListener("mouseout", function() {
        this.src = "images/smiley.jpg";
    });

    pic.addEventListener("mousemove", mouseLocation);

    function dropHeading() {
        console.log("This function uses setInterval to move the heading around.");

        // get the node and set it up
        let node = document.getElementById("message");
        node.style.position = "relative"; // this allows us to move the heading by setting top and left properties
        node.style.backgroundColor = "lightblue";
        node.style.color = "darkred";

        // set up the animation variables
        let top = 0;
        let increment = 20;
        // Move the heading repeatedly in a timer
        let timer = setInterval(function() {
            top = top + increment;
            node.style.top = top + "px";
            if (top > 540) {
                clearInterval(timer);
            }
        }, 16);

    }

    function changePicture() {
        console.log("This function changes the src attribute of the img element.")

        let node = document.getElementById("pic");
        node.src = "images/bird.png";
    }

    function mouseLocation(event) {
        document.getElementById("firstdiv").innerHTML = event.clientX + "," + event.clientY;
    }

    console.log("Try mousing over the picture and clicking the heading to see the DOM automatically change.")
});