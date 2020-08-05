//SETTINGS
const slideTimer = 3500 // 0 = off
//END SETTINGS

const sliderContainer = document.querySelector('.slider-container')
const sliderTrack = document.querySelector('.slider-track')
const prevBtn = document.querySelector('.slider-button-prev')
const nextBtn = document.querySelector('.slider-button-next')
const sliderWrapper = document.querySelector('.slider-wrapper')
const sliderFooter = document.querySelector('.slider-footer')

const slidesCount = sliderTrack.children.length
const slideWidth = sliderContainer.clientWidth

let slideNumber = 1
let position = 0

for (let i = 1; i < slidesCount; i++) {
    let div = document.createElement('div')
    div.className = `control-point`
    sliderFooter.append(div)
}

const controlPoints = document.querySelectorAll('.control-point')
controlPoints.forEach((item, index) => {
    item.addEventListener('click', () => {
        trackIt(index + 1)
        sliderTrack.style.transform = `translateX(-${position}px)`
        for (let i = 0; i < controlPoints.length; i++) {
            controlPoints[i].classList.remove('active-point')
        }
        item.classList.add('active-point')
    })
})

function trackIt(number) {
    position = number*slideWidth - slideWidth
    slideNumber = number
    sliderTrack.style.transform = `translateX(-${position}px)`
    sliderFooter.children[slideNumber - 1].classList.add('active-point')
}

function trackDirection(direction) {
    switch (direction) {
        case 'prev':
            slideNumber === 1 ? slideNumber = slidesCount : --slideNumber
            slideNumber === slidesCount ? sliderFooter.children[0].classList.remove('active-point')
                : sliderFooter.children[slideNumber].classList.remove('active-point')
            trackIt(slideNumber)
            break
        case 'next':
            slideNumber === slidesCount ? slideNumber = 1 : ++slideNumber
            slideNumber === 1 ? sliderFooter.children[slidesCount - 1].classList.remove('active-point')
                : sliderFooter.children[slideNumber - 2].classList.remove('active-point')
            trackIt(slideNumber)
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

function trackInterval(time) {
    if (time !== 0) {
        let interval = setInterval(() => trackDirection('next'), time)

        sliderWrapper.addEventListener('mouseover', () => {
            clearInterval(interval)
        })

        sliderWrapper.addEventListener('mouseout', () => {
            interval = setInterval(() => trackDirection('next'), time)
        })
    }
}

trackInterval(slideTimer)












