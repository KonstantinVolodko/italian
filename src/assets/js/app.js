document.addEventListener("DOMContentLoaded", () => {


    //= components/

    let mainPage = document.querySelector('.main')

    if (mainPage) {
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
                if (id === mainMenuBtns.length - 1 && window.matchMedia("(min-width: 500px)").matches) {
                    mainMenuBtns[id - 1].classList.add('activeCutCornerLast')
                } else if (id === 0 && window.matchMedia("(min-width: 500px)").matches) {
                    mainMenuBtns[1].classList.add('activeCutCornerFirst')
                } else {

                    if (window.matchMedia("(min-width: 500px)").matches) {
                        mainMenuBtns[id - 1].classList.add('activeCutCornerLast')
                        mainMenuBtns[id + 1].classList.add('activeCutCornerFirst')
                    }

                }
                mainMenuContainer.innerHTML = e.nextElementSibling.innerHTML
            })
        })

        mainMenuBtns[0].click()
    }

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


    let menu = document.querySelectorAll('.menu-content__btnContainer button')
    let menuContent = document.querySelector('.menu-content__helperContainer')
    let menuLeftContainer = document.querySelector('.menu-content__leftContainer')
    let menuCenterContainer = document.querySelector('.menu-content__centerContainer')
    let menuRightContainer = document.querySelector('.menu-content__rightContainer')

    menu.forEach((e) => {
        e.addEventListener('click', el => {
            let ulArray = e.nextElementSibling.querySelectorAll('ul')
            let i = 0;
            let containerIndex = 1;
            

            while (i < ulArray.length) {
                const element = document.createElement('ul');
                element.innerHTML = ulArray[i].innerHTML;

                

                if (containerIndex === 1) {
                    menuLeftContainer.appendChild(element);
                } else if (containerIndex === 2) {
                    menuCenterContainer.appendChild(element);
                }else {
                    menuRightContainer.appendChild(element);
                }

                containerIndex = (containerIndex % 3) + 1;

                i++;
            }

            if (e.nextElementSibling.innerHTML === '') {
                console.log('hellp')
            }
        })
    })

    menu[0].click()

})



