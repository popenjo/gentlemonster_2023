// header, footer JS
// header 전페메뉴 스크립트 flow
// 1. open-nav 초기 숨기기
// 2. 햄버거메뉴 클릭 시 open-nev 출력
// 3. open-nav 안 x버튼(nav-close) 클릭 시 open-nav 숨기기
const nav = document.querySelector('#nav')
const open_nav = document.querySelector('#open_nav')
// nav 클릭 시 대상
const nav_close = document.querySelector('#nav_close')
// 닫기 버튼
console.log(nav, open_nav, nav_close)
// 1. open_nav 초기 숨기기 open_nav
open_nav.style.transform = 'translateX(100%)';
// css값 상태에 따라 변경이 일어날 경우 애니메이션
open_nav.style.transition = 'transform 1s ease'
// 2. 햄버거메뉴(nav) 클릭 시 open-nav 출력
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)';
    // display : none 으로 숨긴 대상을 다시 보이게 할 경우
    // 기존 디자인 css에서 flex로 정렬한 대상이면 display:'flex'
    // 기존 디자인 css에서 flex설정이 없다면 display='block'
})
// 3. open_nav 안 x버튼(nav-close) 클릭 시 open-nav 숨기기
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)';
})

// swiper-slide open-nav 광고 영역
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{
        delay:4000,
        disableOnInteraction:false
    },
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});