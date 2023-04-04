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

})



