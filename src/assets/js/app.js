document.addEventListener("DOMContentLoaded", () => {


    //= components/


    let mainMenuContainer = document.querySelector('.main-menu__containerHelper')
    let mainMenuBtns = document.querySelectorAll('.main-menu__menuBtn')

    mainMenuBtns.forEach((e, id) => {
        e.addEventListener('click', el => {
            mainMenuBtns.forEach(e => {
                e.classList.remove('activeMenuBtn')
                e.classList.remove('activeCutCornerLast')
                e.classList.remove('activeCutCornerFirst')
            })
            e.classList.add('activeMenuBtn')
            if (id === mainMenuBtns.length - 1) {
                mainMenuBtns[id - 1].classList.add('activeCutCornerLast')
            }else if (id === 0) {
                mainMenuBtns[1].classList.add('activeCutCornerFirst')
            }else {
                mainMenuBtns[id - 1].classList.add('activeCutCornerLast')
                mainMenuBtns[id + 1].classList.add('activeCutCornerFirst')
            }
            mainMenuContainer.innerHTML = e.nextElementSibling.innerHTML
        })
    })

    mainMenuBtns[0].click()

    let dropdownBtn = document.querySelector('.header-languageContainer svg')
    let dropdownContent = document.querySelector('.header-languageContainer ul')

    dropdownBtn.addEventListener('click', e => {
        
        dropdownContent.classList.toggle('increaceHeight')
    })

    let headerModal = document.querySelector('.header-modal')
    let burgerBtn = document.querySelector('.header-burgerBtn')
    let crossBtn = document.querySelector('.header-modal__crossBtn')


    burgerBtn.addEventListener('click', e => {
        headerModal.classList.add('header-modal__show')
        document.body.classList.add('stopScroll')
    })

    crossBtn.addEventListener('click', e => {
        headerModal.classList.remove('header-modal__show')
        document.body.classList.remove('stopScroll')
    })

})



