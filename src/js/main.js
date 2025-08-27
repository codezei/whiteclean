
import faq from './modules/faq'
import works from './modules/works'
import price from './modules/price'
import header from './modules/header'
import services from './modules/services'
import reviews from './modules/reviews'
import cta from './modules/cta'
import why from './modules/why'
import accordion from './modules/accordion'
import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function () {
	faq()
	header()
	services()
	reviews()
	cta()
	works()
	why()
	accordion()
	price()

	AOS.init({
		offset: 80,
		duration: 200,
		easing: 'ease-in',
		once: true,
	});
})

