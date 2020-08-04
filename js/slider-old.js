//SETTINGS
const slideTimer = 0 // 0 = off
//END SETTINGS

let position = 0
let slideNumber = 0
let prevSlideNumber = 0

const sliderContainer = document.querySelector('.slider-container')
const sliderTrack = document.querySelector('.slider-track')
const prevBtn = document.querySelector('.slider-button-prev')
const nextBtn = document.querySelector('.slider-button-next')
const sliderWrapper = document.querySelector('.slider-wrapper')
const sliderFooter = document.querySelector('.slider-footer')

const slidesCount = sliderTrack.children.length
const slideWidth = sliderContainer.clientWidth
const trackWidth = slideWidth * slidesCount

for (let i = 1; i < slidesCount; i++) {
    let div = document.createElement('div')
    div.className = `control-point`
    sliderFooter.append(div)
}

const trackIt = () => {
    sliderTrack.style.transform = `translateX(${position}px)`
    sliderFooter.children[slideNumber - 1].classList.add('active-point')
    sliderFooter.children[prevSlideNumber - 1].classList.remove('active-point')
    console.log(prevSlideNumber)
    console.log(slideNumber)
}

const trackDirection = (direction) => {

    switch (direction) {
        case 'prev':
            position === 0 ? position = slideWidth - trackWidth : position += slideWidth
            slideNumber = Math.abs(position / slideWidth) + 1
            prevSlideNumber === 2 || prevSlideNumber === 0 ? prevSlideNumber = 1 : prevSlideNumber = slideNumber + 1
            trackIt()
            break
        case 'next':
            position === slideWidth - trackWidth ? position = 0 : position -= slideWidth
            slideNumber = Math.abs(position / slideWidth) + 1
            prevSlideNumber === sliderFooter.children.length - 1 ? prevSlideNumber = sliderFooter.children.length : prevSlideNumber = slideNumber - 1
            trackIt()
            break
        default:
            break
    }
}

nextBtn.addEventListener('click', () => {
    trackDirection('next')
})

prevBtn.addEventListener('click', () => {
    trackDirection('prev')
})

const trackInterval = (time) => {
    if (time !== 0) {
        let iterval = setInterval(() => trackDirection('next'), time)
        sliderWrapper.addEventListener('mouseover', () => {
            clearInterval(iterval)
        })

        sliderWrapper.addEventListener('mouseout', () => {
            iterval = setInterval(() => trackDirection('next'), time)
        })
    }
}

trackInterval(slideTimer)













