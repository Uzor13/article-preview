const popupMobile = document.querySelector('.card-footer--active');
const footer = document.querySelector('.card-footer')
const btn = document.querySelector('.card-footer--share')
const activeBtn = document.querySelector('.card-footer--active__share')

btn.addEventListener('click', () => {
    tooltip = !tooltip
    if(tooltip === true) {
        popupMobile.style.display = 'flex'
        footer.style.display = 'none'
    }
})

activeBtn.addEventListener('click', () => {
    if(tooltip === true) {
        popupMobile.style.display = 'none'
        footer.style.display = 'flex'
    }

})

let tooltip = false