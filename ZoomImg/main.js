let zoom = document.querySelector(".zoom");
let imgZoom = document.getElementById("imgZoom");

zoom.addEventListener("mousemove", (e) => {
    imgZoom.style.opacity = 1;
    console.log("Zoom left: " + zoom.getBoundingClientRect().left);
    console.log("x : " + e.x);
    console.log("Zoom top: " + zoom.getBoundingClientRect().top);
    console.log("y : " + e.y);

    console.log("offsetWidth :" + zoom.offsetWidth);
    console.log("offsetHeight :" + zoom.offsetHeight);

    let positionPx = e.x - zoom.getBoundingClientRect().left;
    let positionx = (positionPx / zoom.offsetWidth) * 100;

    console.log("positionx :" + positionx);

    let positionPy = e.y - zoom.getBoundingClientRect().top;
    let positiony = (positionPy / zoom.offsetHeight) * 100;
    console.log("positiony :" + positiony);

    imgZoom.style.setProperty("--zoom-x", positionx + "%");
    imgZoom.style.setProperty("--zoom-y", positiony + "%");

    // let positionPx = e.x - zoom.getBoundingClientRect().left;
    // // let positionx = (positionPx / zoom.offsetWidth) * 100;

    // let positionPy = e.y - zoom.getBoundingClientRect().top;
    // // let positiony = (positionPy / zoom.offsetHeight) * 100;

    // imgZoom.style.setProperty("--zoom-x", positionPx + "px");
    // imgZoom.style.setProperty("--zoom-y", positionPy + "px");
});

zoom.addEventListener("mouseout", (e) => {
    imgZoom.style.opacity = 0;
});
