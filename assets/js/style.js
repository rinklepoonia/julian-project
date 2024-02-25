const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")


menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
})

// ===============tabes============
function navtabs(tabs) {
    const tabshow = document.querySelectorAll('.tabshow')
    const tabbtn = document.querySelectorAll('.tabs button')
    tabshow.forEach(content => {
        content.style.display = 'none'
    })
    const selecttoshow = document.getElementById(tabs)
    selecttoshow.style.display = 'block'
}
navtabs('tab1')
// =========accordion=========
const accordionHead = document.querySelectorAll(".accordionHead");
accordionHead.forEach((e) => {
    e.addEventListener("click", () => {
        const activeAccordion = document.querySelector(".active")
        e.parentElement.classList.toggle("active")
        activeAccordion && activeAccordion.classList.remove("active")
    })
})

// ============slider=============
$('.responsive').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                autoplay: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                autoplay: true,

            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});