const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container p",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_container form",{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".header_container a",{
    ...scrollRevealOption,
    delay:1500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});
