export default function () {
    let accordions = document.querySelectorAll('.accordion')

    for(let a = 0; a < accordions.length; a++) {
        let items = accordions[a].querySelectorAll('.accordion-item')
        let activeItem = accordions[a].querySelector('.accordion-item.active')
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function (e) {
                if (e.currentTarget !== activeItem && !!activeItem) {
                    activeItem.classList.remove('active')
                }
                if (e.currentTarget.classList.contains('active')) {
                    e.currentTarget.classList.remove('active')
                } else {
                    e.currentTarget.classList.add('active')
                    activeItem = e.currentTarget
                }
            })
        }
    }

}