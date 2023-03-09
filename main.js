const img = document.querySelector('.main')
const footer = document.querySelector('footer')
const pic = document.querySelector('.prof-img-container')

img.addEventListener('mouseover', function (){
    img.style.border = "black solid 2px";
    img.style.opacity = 0.8;
    img.classList.add('shrink')
    let links = document.querySelectorAll(".links");
    for (i=0; i<links.length; i++) {
        links[i].classList.remove("hidden");
    }
})

pic.addEventListener('mouseleave', function () {
    img.style.border = 'none';
    img.style.opacity = 1;
    img.classList.remove('shrink')
    let links = document.querySelectorAll(".links");
    for (i=0; i<links.length; i++) {
        links[i].classList.add("hidden");
    }
})

footer.addEventListener('mouseover', function () {
    let p = document.querySelector('p')
    p.classList.remove('hidden')
    footer.style.opacity = .75;
})

footer.addEventListener('mouseleave', function () {
    let p = document.querySelector('p')
    p.classList.add('hidden')
    footer.style.opacity = .75;
})