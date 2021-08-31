const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const closeBtn = document.querySelector('.js-modal-close');

//Hàm hiển thị modal qua class open
function showBuyTicket () {
    modal.classList.add('open');
}

//Vòng lặp lặp qua node list của 3 node và nghe hành động click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}

//Hàm ẩn modal bằng cách remove class open
function closeBuyTicket () {
    modal.classList.remove('open');
}

//Lệnh lắng nghe click vào nút X
closeBtn.addEventListener('click',closeBuyTicket);

modal.addEventListener('click',closeBuyTicket);

modalContainer.addEventListener('click',function (event){
    event.stopPropagation();
})

// đóng mở mobile menu
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const headerHigh = header.clientHeight;
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHigh;
    if (isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            header.style.height = null;
        }
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}


