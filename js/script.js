'use strict';

const body = document.querySelector('.body'),
    linkHeader = document.querySelector('.navbar__link_header'),
    catalogLink = document.querySelector('.navbar__descr_header'),
    catalogLinkWrap = document.querySelectorAll('.navbar__descr > .wrapp'),
    // ___________
    buttonAdd = document.querySelector('.button_main'),
    popup = document.querySelector('.popup'),
    popupContainer = document.querySelector('.popup > .container'),
    buttonOrder = document.querySelector('.button_popup'),
    closePopup = document.querySelector('.svg__cross_popup'),
    select = document.querySelector('select'),
    opt1 = document.querySelector('#opt1'),
    opt2 = document.querySelector('#opt2'),
    opt3 = document.querySelector('#opt3'),
    checkboxBuy = document.querySelector('#buy'),
    inputName = document.querySelector('[name="name"]'),
    // ___________
    burger = document.querySelector('.svg__burger_header'),
    modal = document.querySelector('.modal_header'),
    closeModal = document.querySelector('.svg__cross_modal'),
    modalLink = document.querySelectorAll('.navbar__link_modal');


const removeClass = function(elem, removeCalss) { elem.classList.remove(removeCalss) };
const addClass = function(elem, addCalss) { elem.classList.add(addCalss) };
const classHidden = 'hidden';

const checkedAttribute = (ojb, name) => {       //
    if(ojb[name]) {
        ojb[name] = false;
    } else {
        ojb[name] = true;
    }
}
let key = false;    //keypress test "ctrl"
const objAttribute = {      //collection for list logic
    atr1: true,
    atr2: false,
    atr3: false,
}

//function for checks the variables in the object "objAttribute"
const checkSelect = () => {
    if (objAttribute['atr1'] && objAttribute['atr2'] && objAttribute['atr3']) {
        inputName.setAttribute('disabled', true);
        checkboxBuy.removeAttribute('disabled');
        buttonOrder.removeAttribute('disabled');
        addClass(select, 'popup__select_focus');
        return;
    }
    if (objAttribute['atr1'] && objAttribute['atr2']) {
        checkboxBuy.setAttribute('disabled', true);
        buttonOrder.setAttribute('disabled', true);
        inputName.removeAttribute('disabled');
        addClass(select, 'popup__select_focus');
        return;
    }
    if (objAttribute['atr1']) {
        buttonOrder.setAttribute('disabled', true);
        checkboxBuy.removeAttribute('disabled');
        inputName.removeAttribute('disabled');
        return;
    }
    if (!objAttribute['atr1'] && !objAttribute['atr2'] && !objAttribute['atr3']) {
        buttonOrder.removeAttribute('disabled');
        inputName.removeAttribute('disabled');
        checkboxBuy.removeAttribute('disabled');
    }
    if (objAttribute['atr2'] || objAttribute['atr3']) {
        buttonOrder.removeAttribute('disabled');
    }
};


window.addEventListener('DOMContentLoaded', () => {
    // hiding and expanding the "select"
    select.addEventListener('click', () => {
        select.setAttribute('multiple', true);
    });
    select.addEventListener('mouseleave', () => {
        if ((objAttribute['atr1'] && !objAttribute['atr2'] && !objAttribute['atr3']) ||
            (!objAttribute['atr1'] && objAttribute['atr2'] && !objAttribute['atr3']) ||
            (!objAttribute['atr1'] && !objAttribute['atr2'] && objAttribute['atr3']) ) {
            select.removeAttribute('multiple');
        }
    });

    // changing the variable "key" when clicking on the button "ctrl"
    window.addEventListener('keydown', (event) => {
        if (event.ctrlKey) {
            key = true;
            console.log(key);
        }
    });
    window.addEventListener('keyup', () => {
            key = false;
            console.log(key);
    });

    // actions when clicking on city first
    opt1.addEventListener('click', () => {
        if (key) {
            checkedAttribute(objAttribute, 'atr1');
            console.log(objAttribute);
        }
        if (!key) {
            objAttribute.atr1 = true;
            objAttribute.atr2 = false;
            objAttribute.atr3 = false;
            console.log(objAttribute);
        }
    })

    // actions when clicking on city second
    opt2.addEventListener('click', () => {
        if (key) {
            checkedAttribute(objAttribute, 'atr2');
            console.log(objAttribute);
        }
        if (!key) {
            objAttribute.atr1 = false;
            objAttribute.atr2 = true;
            objAttribute.atr3 = false;
            console.log(objAttribute);
        }
    })

    // actions when clicking on city third
    opt3.addEventListener('click', () => {
        if (key) {
            checkedAttribute(objAttribute, 'atr3');
            console.log(objAttribute);
        }
        if (!key) {
            objAttribute.atr1 = false;
            objAttribute.atr2 = false;
            objAttribute.atr3 = true;
            console.log(objAttribute);
        }
    })

    select.addEventListener('click', () => {
        checkSelect();
    })

    // links catalog
    linkHeader.addEventListener('click', () => {
        removeClass(catalogLink, classHidden);
    });
    catalogLink.addEventListener('mouseleave', () => {
        addClass(catalogLink, classHidden);
        linkHeader.blur();
        // let event = new Event('focus')
    });

    catalogLinkWrap.forEach(link => {
        link.addEventListener('click', () => {
            addClass(catalogLink, classHidden);
        });
    });

    // popup window open/close
    buttonAdd.addEventListener('click', () => {
        removeClass(popup, classHidden);
        addClass(body, 'body_overflow');
    });
    closePopup.addEventListener('click', () => {
        addClass(popup, classHidden);
        removeClass(body, 'body_overflow');
    });
    buttonOrder.addEventListener('click', (event) => {
        event.preventDefault();
        addClass(popup, classHidden);
        removeClass(body, 'body_overflow');
    });
    popupContainer.addEventListener('click', () => {
        addClass(popup, classHidden);
        removeClass(body, 'body_overflow');
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            addClass(popup, classHidden)
            removeClass(body, 'body_overflow');
        }
    })

    // modal window
    burger.addEventListener('click', () => {
        addClass(modal, 'modal_active');
    });
    closeModal.addEventListener('click', () => {
        removeClass(modal, 'modal_active');
    });
    modalLink.forEach(link => {
        link.addEventListener('click', () => {
            removeClass(modal, 'modal_active');
        });
    })

});
