const mainwrapper = document.querySelector(".mainwrapper")
const firstsectionwrapper = document.querySelector(".firstsection .wrapper")
const firstsectiontext = firstsectionwrapper.querySelector(".text")
const navbar = document.querySelector("header")
// const mainwrapper = document.querySelector(".mainwrapper")

console.log(mainwrapper, firstsectionwrapper, firstsectiontext);

const tl = new TimelineMax();

console.log("hello")
tl.
    fromTo(
        firstsectionwrapper,
        1,
        { height: "0%" },
        { height: "80vh", ease: Power2.easeInOut },
        1
    )
    .fromTo(
        firstsectiontext,
        .5,
        { opacity: "0" },
        { opacity: "1" },
        "-=0.5"
    )
