//1. 모바일 메뉴 숨기기
//객체 = 모바일메뉴 m_nav_open
//객체.속성 style.display='none'
//2. 햄버거 메뉴 클릭시 모바일 메뉴 보이기
//객체 = 햄버거 메뉴 m_nav, 모바일 메뉴 m_nav_open
//속성 =  보이기
//이벤트 = 클릭
//메서드 = 실행함수
//3. x 버튼 클릭시 모바일 메뉴 숨기기
//객체 = x버튼 close , 모바일메뉴 m_nav_open
//변수생성
const m_nav_open = document.querySelector ('.m_nav_open');  
const m_nav = document.querySelector ('.m_nav'); 
const close = document.querySelector ('#close'); 
// 정상출력확인 에러메세지 null, undefined
console.log (m_nav_open, m_nav, close);
//1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none';
//2-1. 햄버거 메뉴 클릭시 
//(객체.메서드(이벤트,함수)) 
m_nav.addEventListener('click',function(){
    m_nav_open.style.display='block'; //2-2.모바일 메뉴 보이기(객체.속성.속성=값)
}) 
//3. x 버튼 클릭 시 모바일 메뉴 숨기기
close.addEventListener('click',function(){
    m_nav_open.style.display='none';
}) 

// main-swiper-slide
// const 변수명 = new Swiper('적용대상');   
// const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});   
const pawin_slide = new Swiper('#pawin_slide',{
    // 자동재생 
    autoplay:{//자동재생  /* 기본이 3초=3000 */ 
        delay:1000,
        disableOnInteraction:false,}, //버튼 클릭 후 자동재생유지
    loop:true,          /* loop:true 자연스럽게 한방향으로 지나간다. */
    effect:'fade', //제자리 변경 슬라이드 효과  /* effect나 direction 둘중 하나만 */
    //direction:'vertical' 
    navigation: {
        //next,prev 객체 연결 시 부모를 안적으면 
        //body 안에 있는 모든 swiper-next, prev를 인식하기 때문에
        //개별인식가능한 부모이름을 반드시 안에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',   /* #pawin_slide부모명을 적어줘서 전용으로 인식 */
        prevEl: '#pawin_slide .swiper-button-prev',   
    },
    
});

/* const pawin_slide = new Swiper('#',{
    autoplay:{delay:1000}, loop:true,        
    effect:'fade',
    navigation: {        
        nextEl: '#pawin_slide .swiper-button-next',  
        prevEl: '#pawin_slide .swiper-button-prev',   
    },
    
}); */