//**************************************************************************** 
// 기능  : lebel5 속성 추가해주기
// 일일히 자식속성이 누구냐에 따라서 지정해줘야할것이 많음
//**************************************************************************** 
for(let i=0; i<12 ; i++){
    let a=document.querySelectorAll('.s5-li');
    let b=document.createElement("div");b.classList.add("s5-li-div");
    let c=document.createElement("div");c.classList.add("s5-li-div2");
    let d=document.createElement("div");d.classList.add("s5-li-div-div");
    let a3=document.createElement("a");a3.href="#";a3.classList.add("img11");
 
    let div11=document.createElement("div");div11.id="s5_title_java";
    let div12=document.createElement("div");div12.classList.add("member-free");
    let div13=document.createElement("div");div13.classList.add("star-free");

    let p21=document.createElement("p");p21.classList.add("p_member");
    let p22=document.createElement("p");p22.classList.add("sbd-member-star");
        p22.textContent='*';
    let p23=document.createElement("p");p23.classList.add("p_free");
        p23.textContent="외 1명";  
    let p33=document.createElement("p");p33.classList.add("p_star");

    
    
    b.appendChild(d);d.appendChild(a3);
    c.appendChild(div11);
    c.appendChild(div12);   div12.appendChild(p21); 
                            div12.appendChild(p22);
                            div12.appendChild(p23);
    c.appendChild(div13);   div13.appendChild(p33); 
    a[i].appendChild(b);
    a[i].appendChild(c);
    }


//**************************************************************************** 
// 기능  : lebel3 속성 추가해주기
// 위 방식 보다 좀더 간결하고 깔끔함 
// 처음에 구조를 잘 짜주면 반복되는 아이들 묶어서 처리
// innerHTML 로 한번에 추가
//**************************************************************************** 
let label3 = document.querySelectorAll('.label3_li');
console.log(label3)
label3.forEach(insert => {
insert.innerHTML = `<div class="basic-bigbox"><!-- 이미지 넣는 구간 --><div class="basic-imgbox3"></div><!-- 인덱스넣는 구간 --><div class="basic-indexbox"><div class="basic-index">1</div></div><!-- 속성 넣는 구간 --><div class="basic-bigbox-d3"><div class="basic-form"><div class="title-free3"></div><div class="member-free"><p class="p_member3"></p><p class="sbd-member-star">*</p><p class="p_free3"></p></div><div class="star-free"><p class="p_star"></p></div></div></div></div>` ;});

let label1 = document.querySelectorAll('.label1_li');
console.log(label1)
label1.forEach(insert => {
insert.innerHTML = `<div class="basic-bigbox"><!-- 이미지 넣는 구간 --><div class="basic-imgbox1"></div><!-- 인덱스넣는 구간 --><div class="basic-indexbox"><div class="basic-index">1</div></div><!-- 속성 넣는 구간 --><div class="basic-bigbox-d1"><div class="basic-form"><div class="title-free1"></div><div class="member-free"><p class="p_member1"></p><p class="sbd-member-star">*</p><p class="p_free1"></p></div><div class="star-free"><p class="p_star"></p></div></div></div></div>` ;});




//**************************************************************************** 
// 기능   : 버튼 속성과 별속성 추가해주기
// 기능   :  위 방법과 동일하게 하여 중복되는 버튼 통일시켜주기
//**************************************************************************** 
let buttonss = document.querySelectorAll('button');
buttonss.forEach(button => {
button.innerHTML = `
<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="fig-0">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.63859 14.2293C4.36522 13.9559 4.36522 13.5127 4.63859 13.2394L9.87695 8.00099L4.63859 2.76263C4.36522 2.48927 4.36522 2.04605 4.63859 1.77268C4.91195 1.49932 5.35517 1.49932 5.62854 1.77268L11.3619 7.50602C11.6352 7.77939 11.6352 8.2226 11.3619 8.49597L5.62854 14.2293C5.35517 14.5027 4.91195 14.5027 4.63859 14.2293Z" fill="currentColor">dd</path></svg>` ;});

let stars = document.querySelectorAll('.p_star');
console.log(stars)
stars.forEach(insert => {
insert.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0l1.812 3.303L11 4.025 8.446 6.759l.459 3.741L5.5 8.903 2.095 10.5l.459-3.74L0 4.002l3.688-.7L5.5 0z" fill="currentColor"></path></svg><span>4.9  </span><span>(3,759)</span>` 
;});

//**************************************************************************** 
// 함수명  : checkCollision(고정박스, 이동박스, 왼쪽버튼, 오른쪽 버튼)
// 기능   :  더이상 이동할수 없는 버튼은 안보이도록 히든 처리
//**************************************************************************** 
function checkCollision(a, b, c, d) {
    const box1 = document.getElementById(a);
    const box2 = document.getElementById(b);
    const btn1 = document.getElementById(c);
    const btn2 = document.getElementById(d);

    const rect1 = box1.getBoundingClientRect();
    const rect2 = box2.getBoundingClientRect();

    if (rect1.x == rect2.x) {
        btn1.style.visibility = 'hidden';
        btn2.style.visibility = 'visible';
    } else {
        btn1.style.visibility = 'visible';
        btn2.style.visibility = 'hidden';
    }}


//**************************************************************************** 
// 실행      : checkCollision 함수 진행시키기
// 총 개수   :  2개 (label5 , event)
//**************************************************************************** 
// window.addEventListener('scroll', checkCollision); 이건 스크롤용
//lavel5
nextBtn3.addEventListener('click', () => { setTimeout(() => { checkCollision('scroll_start', 'li_start', 'prevBtn3','nextBtn3'); }, 510); });
prevBtn3.addEventListener('click', () => { setTimeout(() => { checkCollision('scroll_end', 'li_end', 'nextBtn3','prevBtn3'); }, 510); });

//event
nextBtne.addEventListener('click', () => { setTimeout(() => { checkCollision('scroll_starte', 'li_starte', 'prevBtne','nextBtne'); }, 510); });
prevBtne.addEventListener('click', () => { setTimeout(() => { checkCollision('scroll_ende', 'li_ende', 'nextBtne','prevBtne'); }, 510); });


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
// 실행  : touchbar 함수 진행시키기
// 총 개수   :  4개
//**************************************************************************** 
touchbar('.slider-wrapper4', '.slider-block4', '.slider-container4', 'prevBtn4', 'nextBtn4', 3, 0, 3);
touchbar('.slider-wrapper1', '.slider-block1', '.slider-container1', 'prevBtn1', 'nextBtn1', 3, 0, 3);
touchbar('.slider-wrapper3', '.slider-block3', '.slider-container3', 'prevBtn3', 'nextBtn3', 6, 6, 6);
touchbar('.slider-wrappere', '.slider-blocke', '.slider-containere', 'prevBtne', 'nextBtne', 3, 6, 3);





//**************************************************************************** 
// 함수명  : fetchBooks(원하는 주제)
// 기능    : 특정파라미터를 정해주면 url 만들어주기
//**************************************************************************** 
async function fetchBooks(query) {
    const params = new URLSearchParams({target: "title",query,size: 40});
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;
    const response = await fetch(url,{method: 'GET',headers: {
            Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}});
    if (!response.ok) { throw new Error(`HTTP 오류: ${response.status}`); }
    return response.json();
}


//**************************************************************************** 
// 함수명  : bookData(컨텐츠,img넣을 박스, 제목넣을 박스, 멤버넣을 박스)
// 기능    : 필요한 부분은 태그를 직점 생성해서 그 태그안에 API자료 넣기
//**************************************************************************** 
async function bookData(a,b,c,d) {

    const data = await fetchBooks(a);
    const label5_img = document.querySelectorAll(b);
    const label5_title = document.querySelectorAll(c);
    const label5_member = document.querySelectorAll(d);
    for (let i = 0; i < label5_title.length; i++) {

        //이미지추가
        const img = document.createElement("img");
        img.src = data.documents[i].thumbnail;
        label5_img[i].appendChild(img);
        // 제목추가
        const title = document.createElement("a");
        title.classList.add("sbd-title");
        title.textContent = data.documents[i].title;
        label5_title[i].appendChild(title);

        //저자추가
        const member = document.createElement("a");
        member.classList.add("sbd-member");
        member.textContent = data.documents[i].authors;
        label5_member[i].appendChild(member);
    };
}
//**************************************************************************** 
// 실행  : bookData 함수 진행시키기
// 총 개수   :  2개
//**************************************************************************** 
bookData("기린",'.basic-imgbox3','.title-free3','.p_member3');
bookData("기린",'.basic-imgbox1','.title-free1','.p_member1');
bookData("기린",'.img11','#s5_title_java','.p_member');
