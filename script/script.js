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