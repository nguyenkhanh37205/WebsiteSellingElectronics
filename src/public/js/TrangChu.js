let danhsach = document.querySelector('.bieungu .danhsach');
let banner = document.querySelectorAll('.bieungu .danhsach .bn');
let cham = document.querySelectorAll('.bieungu .cham li');
let trai = document.getElementById('trai');
let phai = document.getElementById('phai');

let hoatdong = 0;
let lengthBanner = banner.length;

phai.onclick = function(){
    if(hoatdong + 1 > lengthBanner){
        hoatdong = 0;
    }else{
        hoatdong = hoatdong + 1;
    }
    reloadBieungu();
}
trai.onclick = function(){
    if(hoatdong - 1 < 0){
        hoatdong = lengthBanner;
    }else{
        hoatdong = hoatdong -1;
    }
    reloadBieungu();
}
let refreshBieungu = setInterval(() => {phai.click()}, 5000)
function reloadBieungu(){
    let benTrai = banner[hoatdong].offsetLeft;
    danhsach.style.left = -benTrai + 'px';

    let chamHoatDong = document.querySelector('.bieungu .cham li.hoatdong');
    chamHoatDong.classList.remove('hoatdong');
    cham[hoatdong].classList.add('hoatdong');
    clearInterval(refreshBieungu);
    refreshBieungu = setInterval(()=>{phai.click()}, 5000)
}
cham.forEach((li, key) => {
    li.addEventListener('click', function(){
        hoatdong = key;
        reloadBieungu();
    })
})