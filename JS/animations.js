    const mainwrapper = document.querySelector(".mainwrapper")
    const firstsectionwrapper = document.querySelector(".firstsection .wrapper")
    const firstsectiontext = firstsectionwrapper.querySelector(".text")
    const navbar = document.querySelector("header")
    const image = document.querySelector(".background img")
    const svgs = document.querySelectorAll(".background svg")
    // const mainwrapper = document.querySelector(".mainwrapper")

    console.log(mainwrapper, firstsectionwrapper, firstsectiontext, image,svgs);

    const tl = new TimelineMax();

    console.log("hello")
    tl.
        fromTo(
            firstsectionwrapper,
            .2,
            { width: "0%" },
            { width: "100%", ease: Power2.easeInOut },
            
        )
        .fromTo(
            image,
            .1,
            { opacity: "0" },
            { opacity: "1" }
        ).fromTo(
            svgs,
            1,
            {opacity: "0"},
            {opacity: "1"}
        )
        .fromTo(
            firstsectiontext,
            .1,
            { opacity: "0" },
            { opacity: "1" },
            "-=1"
        )

