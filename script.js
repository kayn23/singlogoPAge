function setFilter (arg) { //фильтр для картинок
    $('.all').parent('div').hide();
    $('.'+arg).parent('div').show();
}


function createModal (arg) {  //генерирует модальное окно для просмотра картинки
    var modOkno = document.createElement('div');
    modOkno.id = 'modal';
    modOkno.onclick = modalClose;
    var div = document.createElement('div');
    div.className = 'b_modal__elem visions';
    var pictures = document.createElement('img');
    pictures.className = 'b_modal__pictures'
    pictures.setAttribute('src','img/PortfolioBig/' + arg);
    div.appendChild(pictures);
    modOkno.appendChild(div);
    document.body.appendChild(modOkno);
}

function modalClose () { //удаление модального окна
    document.body.removeChild(document.querySelector('#modal'));
}

$('.all').click(function(e) {
    var a = [];
    a = e.target.getAttribute('src').split('/');
    createModal(a[2]);
})


function windowSize() {
    if ($(window).width() <= '750' ) {
        $('.buttonShow').show();
        $('.blockShow').hide();
    } else {
        $('.blockShow').show();
        $('.buttonShow').hide();
    }
}

$('.buttonShow').click(function(e) {
    var a = $(e.target).next();
    console.log(a);
    a.toggle();
})

$(window).on('load',windowSize);

$(window).scroll(function() {
    if ($(window).scrollTop() > $(window).height()/2) {
        $('.UP').show();
    } else {
        $('.UP').hide();
    }
})
