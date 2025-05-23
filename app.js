const mainHeading = document.querySelector('.mainHeading')

const observer =    new IntersectionObserver(ernty =>{
    ernty.forEach(e => {
        if (e.isIntersecting) {
            mainHeading.classList.add('mainHeadingStyle')   
        }
    });
})

observer.observe(mainHeading)