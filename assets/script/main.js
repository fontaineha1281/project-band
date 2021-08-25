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