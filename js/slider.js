const sliderContainer = document.querySelector('.slider-container')
const sliderTrack = document.querySelector('.slider-track')
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')

let position = 0
const slidesCount = sliderTrack.children.length
const slideWidth = sliderContainer.clientWidth
const trackWidth = slideWidth * slidesCount

const trackIt = () => {
    sliderTrack.style.transform = `translateX(${position}px)`
}

nextBtn.addEventListener('click', () => {
    position === slideWidth - trackWidth ? position = 0 : position -= slideWidth
    trackIt()
})

prevBtn.addEventListener('click', () => {
    position === 0 ? position = slideWidth - trackWidth : position += slideWidth
    trackIt()
})




