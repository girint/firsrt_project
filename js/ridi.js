//**************************************************************************** 
// 함수명  : checkCollision(고정박스, 이동박스, 왼쪽버튼, 오른쪽 버튼)
// 기능   :  더이상 이동할수 없는 버튼은 안보이도록 히든 처리
//**************************************************************************** 
function checkCollision(a, b, c, d) {
    let box1 = document.getElementById(a);
    let box2 = document.getElementById(b);
    let btn1 = document.getElementById(c);
    let btn2 = document.getElementById(d);

    let rect1 = box1.getBoundingClientRect();
    console.log(rect1.x)
    let rect2 = box2.getBoundingClientRect();
    console.log(rect2.x)

    if (rect1.x == rect2.x) {
        btn1.style.visibility = 'hidden';
        btn2.style.visibility = 'visible';
    } else {
        btn1.style.visibility = 'visible';
        btn2.style.visibility = 'hidden';
    }
}



//**************************************************************************** 
// 특수추가  : button
// 기능   :  버튼 태그가 생성되면 자동으로 속성이 들어가도록 하기
//**************************************************************************** 
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
button.innerHTML = `
<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="fig-0">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.63859 14.2293C4.36522 13.9559 4.36522 13.5127 4.63859 13.2394L9.87695 8.00099L4.63859 2.76263C4.36522 2.48927 4.36522 2.04605 4.63859 1.77268C4.91195 1.49932 5.35517 1.49932 5.62854 1.77268L11.3619 7.50602C11.6352 7.77939 11.6352 8.2226 11.3619 8.49597L5.62854 14.2293C5.35517 14.5027 4.91195 14.5027 4.63859 14.2293Z" fill="currentColor">dd</path></svg>` ;});


//**************************************************************************** 
// 함수명  : touchbar(고정박스,이동박스, 실제박스 ,왼쪽버튼, 오른쪽버튼, 이동시킬박스개수, 여백크기, 한화면에 보이는 박스수 )
// 기능   :  정한 횟수만큼의 박스가 버튼 누를때  이동하는 이벤트
//**************************************************************************** 
function touchbar(a, b, c, d, e, f, g, h) {
    let wrapper = document.querySelector(a);
    let blocks = document.querySelectorAll(b);
    let container = document.querySelector(c);

    let currentIndex = 0;
    let blockWidth = blocks[0].offsetWidth + g; // 블록 너비 + 간격
    let visibleCount = h; // 한 화면에 보이는 블록 수
    let maxIndex = blocks.length - visibleCount; // 슬라이드 가능한 최대 인덱스

    wrapper.style.transition = 'transform 0.5s ease'

    function slideTo(index) {
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        currentIndex = index;
        wrapper.style.transform = `translateX(${-blockWidth * currentIndex}px)`;
    }

    document.getElementById(d).addEventListener('click', () => slideTo(currentIndex - f));
    document.getElementById(e).addEventListener('click', () => slideTo(currentIndex + f));
}


//**************************************************************************** 
// 실제작동  : touchbar
// 총 개수   :  4개
//**************************************************************************** 
touchbar('.slider-wrapper4', '.slider-block4', '.slider-container4', 'prevBtn4', 'nextBtn4', 3, 0, 3);
touchbar('.slider-wrapper1', '.slider-block1', '.slider-container1', 'prevBtn1', 'nextBtn1', 3, 0, 3);
touchbar('.slider-wrapper3', '.slider-block3', '.slider-container3', 'prevBtn3', 'nextBtn3', 6, 6, 6);
touchbar('.slider-wrappere', '.slider-blocke', '.slider-containere', 'prevBtne', 'nextBtne', 3, 6, 3);


//**************************************************************************** 
// 기능  : 특정버튼 지정후 이동
// 총 개수   :  2개 (label5 , event)
//**************************************************************************** 
// window.addEventListener('scroll', checkCollision); 이건 스크롤용
//lavel5
nextBtn3.addEventListener('click', () => { setTimeout(() => { checkCollision('scroll_start', 'li_start', 'prevBtn3','nextBtn3'); }, 510); });
prevBtn3.addEventListener('click', () => { setTimeout(() => { checkCollision('scroll_end', 'li_end', 'nextBtn3','prevBtn3'); }, 510); });

//event
nextBtne.addEventListener('click', () => { setTimeout(() => { checkCollision('scroll_starte', 'li_starte', 'prevBtne','nextBtne'); }, 510); });
prevBtne.addEventListener('click', () => { setTimeout(() => { checkCollision('scroll_ende', 'li_ende', 'nextBtne','prevBtne'); }, 510); });