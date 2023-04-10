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
    let menuPage = document.querySelector('.menu')


    if (menuPage) {

        if (window.matchMedia("(min-width: 1024px)").matches) {
            menu.forEach((e) => {
                e.addEventListener('click', el => {
                    let ulArray = e.nextElementSibling.querySelectorAll('ul')
                    let i = 0;
                    let containerIndex = 1;

                    menuLeftContainer.innerHTML = ""
                    menuCenterContainer.innerHTML = ""
                    menuRightContainer.innerHTML = ""


                    menu.forEach(el => {
                        el.classList.remove('activeTab')
                    })
                    e.classList.add('activeTab')


                    while (i < ulArray.length) {
                        const element = document.createElement('ul');
                        element.innerHTML = ulArray[i].innerHTML;



                        if (containerIndex === 1) {
                            menuLeftContainer.appendChild(element);
                        } else if (containerIndex === 2) {
                            menuCenterContainer.appendChild(element);
                        } else {
                            menuRightContainer.appendChild(element);
                        }

                        containerIndex = (containerIndex % 3) + 1;

                        i++;
                    }

                    document.querySelectorAll('.menu-content__helperContainer ul').forEach(e => {
                        if (e.innerHTML === "") {
                            e.classList.add('resetTab')
                        }
                    })

                })
            })
        } else if (window.matchMedia("(max-width: 1024px)").matches) {
            menu.forEach(e => {
                e.addEventListener('click', el => {
                    menu.forEach(el => {
                        el.classList.remove('activeTab')
                    })
                    e.classList.add('activeTab')
                    menuContent.innerHTML = e.nextElementSibling.innerHTML
                })
            })
        }


        menu[0].click()
    }



    let modal = document.querySelector('.modal')
    let openModal = document.querySelectorAll('.openModal')
    let modalCross = document.querySelector('.modal-crossContainer')
    let formContainer = document.querySelector('.modal-formContainer')
    let thanksContainer = document.querySelector('.modal-thanksContainer')
    let sendBtn = document.querySelectorAll('.modal-sendBtn')


    openModal.forEach(e => {
        e.addEventListener('click', el => {
            modal.classList.add('showModal')
        })
    })

    modalCross.addEventListener('click', el => {
        modal.classList.remove('showModal')
        formContainer.classList.remove('hidden')
        thanksContainer.classList.remove('show')
    })

    // sendBtn.forEach(e => {
    //     e.addEventListener('click', el => {
    //         formContainer.classList.add('hidden')
    //         thanksContainer.classList.add('show')
    //     })
    // })


    let prevScrollPosition = window.pageYOffset;
    let header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;


    window.onscroll = function () {
        let currentScrollPosition = window.pageYOffset;

        if (prevScrollPosition > currentScrollPosition) {
            header.style.top = "0";
        } else {
            header.style.top = `-${headerHeight + 'px'}`;
            
            if (window.matchMedia("(max-width: 1330px)").matches && dropdownContent.classList.contains('increaceHeight')) {
                dropdownContent.classList.remove('increaceHeight')
            }
        }

        prevScrollPosition = currentScrollPosition;
    }


    const params = new URL(document.location).searchParams;
    const category = params.get("category");

    if (category) {
        const button = document.querySelector([`data-item="${category}"`]);
        if (button) {
            button.click();
        }
    } else {
        if (menu.length) {
            menu[0].click();
        }
    }





})



