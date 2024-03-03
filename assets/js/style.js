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


// navtabs_history_grident
function navtabs_history(tab) {
    const historyshow = document.querySelectorAll('.historyshow')
    const tabbtn = document.querySelectorAll('.tab button')
    historyshow.forEach(content => {
        content.style.display = 'none'
    })
    const selecttoshow = document.getElementById(tab)
    selecttoshow.style.display = 'block'
}
$(document).ready(function () {
    $('.Tabs').on('click', function () {
        $('.Tabs').removeClass('active');
        $(this).addClass('active');
    })
});
navtabs_history('tabhistory1')

// ===========back-to-top===========
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
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
                autoplay: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                autoplay: true,
                dots: true,
            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});