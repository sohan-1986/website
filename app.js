const mainHeading = document.querySelector('.mainHeading')
const right = document.querySelector('.right')

const observer =    new IntersectionObserver(ernty =>{
    ernty.forEach(e => {
        console.log(e)
        if (e.isIntersecting) {
            mainHeading.classList.add('mainHeadingStyle')   
        }
    });
})
const observer2 =    new IntersectionObserver(ernty =>{
    ernty.forEach(e => {
        console.log(e)
        if (e.isIntersecting) {
            right.classList.add('slideRight')
        }
    });
})
observer.observe(mainHeading)
observer.observe2(right)