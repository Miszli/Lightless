document.addEventListener('DOMContentLoaded', () => {
	const slides = document.querySelectorAll('.slide')
	const carousel = document.querySelector('.carousel__track')
	const items = Array.from(carousel.children)
	const rightButton = document.querySelector('.carousel__button--right')
	const leftButton = document.querySelector('.carousel__button--left')

	function showSlide() {
		slides.forEach(slide => {
			slide.classList.remove('active')
			this.classList.add('active')
		})
	}

	slides.forEach(slide => slide.addEventListener('click', showSlide))

	const moveCarousel = direction => {
		if (direction === 'left') {
			const lastItem = items.pop()
			items.unshift(lastItem)
		} else if (direction === 'right') {
			const firstItem = items.shift()
			items.push(firstItem)
		}

		items.forEach((item, index) => {
			item.className = 'carousel__item'
			if (index === 0) item.classList.add('carousel__item--smallest', 'carousel__item--smallest-left')
			else if (index === 1) item.classList.add('carousel__item--smaller', 'carousel__item--smaller-left')
			else if (index === 2) item.classList.add('carousel-active')
			else if (index === 3) item.classList.add('carousel__item--smaller', 'carousel__item--smaller-right')
			else if (index === 4) item.classList.add('carousel__item--smallest', 'carousel__item--smallest-right')
		})
	}

	rightButton.addEventListener('click', () => moveCarousel('right'))
	leftButton.addEventListener('click', () => moveCarousel('left'))

})
