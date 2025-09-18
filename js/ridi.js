//**************************************************************************** 
// 기능  : label5 속성 추가해주기
// 일일히 자식속성이 누구냐에 따라서 지정해줘야할것이 많음
//**************************************************************************** 
const items = document.querySelectorAll('.s5-li');

for(let i = 0; i < 12; i++){
  items[i].innerHTML += `<div class="s5-li-div"><div class="s5-li-div-div"><a href="#" class="img11"></a></div></div><div class="s5-li-div2"><div class="title-free5"></div><div class="member-free"><p class="p_member5"></p><p class="sbd-member-star">*</p><p class="p_free">외 1명</p></div><div class="star-free"><p class="p_star"></p></div></div>`;}

//**************************************************************************** 
// 기능  : label5 속성 추가해주기
// 일일히 자식속성이 누구냐에 따라서 지정해줘야할것이 많음
//**************************************************************************** 
for(let i=0; i<12 ; i++){
    let a=document.querySelectorAll('.s6-li');
    let b=document.createElement("div");b.classList.add("s5-li-div");
    let c=document.createElement("div");c.classList.add("s5-li-div2");
    let d=document.createElement("div");d.classList.add("s5-li-div-div");
    let a3=document.createElement("a");a3.href="#";a3.classList.add("img12");
 
    let div11=document.createElement("div");div11.classList.add("title-free6");
    let div12=document.createElement("div");div12.classList.add("member-free");
    let div13=document.createElement("div");div13.classList.add("star-free");

    let p21=document.createElement("p");p21.classList.add("p_member6");
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
label3.forEach(insert => {
insert.innerHTML = `<div class="basic-bigbox"><!-- 이미지 넣는 구간 --><div class="basic-imgbox3"></div><!-- 인덱스넣는 구간 --><div class="basic-indexbox"><div class="basic-index3">1</div></div><!-- 속성 넣는 구간 --><div class="basic-bigbox-d3"><div class="basic-form"><div class="title-free3"></div><div class="member-free"><p class="p_member3"></p><p class="sbd-member-star">*</p><p class="p_free3"></p></div><div class="star-free"><p class="p_star"></p></div></div></div></div>` ;});

let label4 = document.querySelectorAll('.label4_li');
label4.forEach(insert => {
insert.innerHTML = `<div class="basic-bigbox"><!-- 이미지 넣는 구간 --><div class="basic-imgbox4"></div><!-- 인덱스넣는 구간 --><div class="basic-indexbox"><div class="basic-index4">1</div></div><!-- 속성 넣는 구간 --><div class="basic-bigbox-d4"><div class="basic-form"><div class="title-free4"></div><div class="member-free"><p class="p_member4"></p><p class="sbd-member-star">*</p><p class="p_free4"></p></div><div class="star-free"><p class="p_star"></p></div></div></div></div>` ;});




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
stars.forEach(insert => {
insert.innerHTML = `<svg width="1em" color='red' height="1em" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0l1.812 3.303L11 4.025 8.446 6.759l.459 3.741L5.5 8.903 2.095 10.5l.459-3.74L0 4.002l3.688-.7L5.5 0z" fill="currentColor"></path></svg><span style='margin-left :5px ;margin-right:3px'>4.9</span><span>(3,759)</span>` 
;});


//**************************************************************************** 
// 기능   : 별모양 있는 평점 숫자 랜덤으로 부여하기
// 학습목표   :  랜덤함수 반올림 하는 방법 습득하기 
//**************************************************************************** 

const p_star=document.querySelectorAll('.p_star>span')
for(i=0;i<p_star.length/2;i++){
  const random= Math.round((5-Math.random())*10)/10
  p_star[i*2].textContent=random
  }
for(i=0;i<p_star.length/2;i++){
  // console.log(p_star[i*2-1])
  const random1= Math.round((Math.random())*10000)
  p_star[i*2+1].textContent="("+random1+")"
  }

//**************************************************************************** 
// 함수명  : checkCollision(고정박스, 이동박스, 왼쪽버튼, 오른쪽 버튼)
// 기능   :  더이상 이동할수 없는 버튼은 안보이도록 히든 처리
//**************************************************************************** 
function checkCollision(num) {
  const list1 = ['scroll_start', 'li_start', 'scroll_end', 'li_end', 'prevBtn', 'nextBtn'];
  const elements = list1.map(id => document.getElementById(id + num));
  const [box1, box2, box3, box4, btn1, btn2] = elements;

  const [rect1, rect2, rect3, rect4] = elements.slice(0, 4).map(el => el.getBoundingClientRect());

  const rect44 = rect4.x + 1300;

  btn1.style.visibility = rect1.x > rect2.x ? 'visible' : 'hidden';
  btn2.style.visibility = rect3.x <= rect44 ? 'visible' : 'hidden';}

//**************************************************************************** 
// 함수명  : 버튼 실행시키기
// 기능   :  아직 왼쪽 오른쪽 다른 버튼 이라 저렇게 만들었는데 합칠수 있는 방법 생각해보기
//**************************************************************************** 
const buttons = [
  { next: nextBtn3, prev: prevBtn3, num: 3 },
  { next: nextBtn4, prev: prevBtn4, num: 4 },
  { next: nextBtne, prev: prevBtne, num: 'e' },
  { next: nextBtn5, prev: prevBtn5, num: 5 },
  { next: nextBtn6, prev: prevBtn6, num: 6 },
];

buttons.forEach(({ next, prev, num }) => {
  next.addEventListener('click', () => {
    setTimeout(() => checkCollision(num), 520);
  });
  prev.addEventListener('click', () => {
    setTimeout(() => checkCollision(num), 520);
  });
});

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
touchbar('.slider-wrapper3', '.slider-block3', '.slider-container3', 'prevBtn3', 'nextBtn3', 1, 0, 3);
touchbar('.slider-wrappere', '.slider-blocke', '.slider-containere', 'prevBtne', 'nextBtne', 3, 6, 3);
touchbar('.slider-wrapper5', '.slider-block5', '.slider-container5', 'prevBtn5', 'nextBtn5', 6, 6, 6);
touchbar('.slider-wrapper6', '.slider-block6', '.slider-container6', 'prevBtn6', 'nextBtn6', 6, 6, 6);




//**************************************************************************** 
// 함수명  : fetchBooks(원하는 주제)
// 기능    : 특정파라미터를 정해주면 url 만들어주기
//추가기능 공부 : 썸네일이 없는 data 삭제하기
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
async function bookData(a,b,c,d,e) {

    const data = await fetchBooks(a);
    const label5_img = document.querySelectorAll(b);
    const label5_title = document.querySelectorAll(c);
    const label5_member = document.querySelectorAll(d);
    const label5_index = document.querySelectorAll(e);
    for (let i = 0; i < label5_title.length; i++) {

        //이미지추가
        console.log()
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

        //인덱스 추가
        label5_index[i].textContent = i+1
    };
}
//**************************************************************************** 
// 실행  : bookData 함수 진행시키기
// 총 개수   : 4개
//**************************************************************************** 
bookData("사랑",'.basic-imgbox3','.title-free3','.p_member3',".basic-index3");
bookData("돈",'.basic-imgbox4','.title-free4','.p_member4',".basic-index4");
bookData("행복",'.img11','.title-free5','.p_member5',".basic-index4");
bookData("월",'.img12','.title-free6','.p_member6',".basic-index4");

//**************************************************************************** 
// 함수  : daydata(변수)
// 기능  : 특정 요일에 지정한 카테고리의 메뉴들로 나오게 하기
//**************************************************************************** 
async function daydata(a) {
  const data = await fetchBooks(a);
  const img = document.querySelectorAll('.img12 img');
  const title = document.querySelectorAll('.title-free6 a');
  const member = document.querySelectorAll('.p_member6 a');
  for (let i = 0; i < title.length; i++) {

    //이미지추가
    img[i].src = data.documents[i].thumbnail;
    title[i].textContent = data.documents[i].title;
    member[i].textContent = data.documents[i].authors;
  }
}


//**************************************************************************** 
// 함수  :  tabtab(class_name)
// 요약  : 클릭을 하면 다른 아이들의 active는 다 사라지고 클릭한 친구만 주기
//**************************************************************************** 
function tabtab(class_name){
  const act = document.querySelectorAll(class_name);
  act.forEach(div => {
    div.addEventListener('click', () => {
      act.forEach(d => d.classList.remove('active'));
      div.classList.add('active');
    });
  });
};
tabtab('.s6-days')
tabtab('.s1-menu-ul li')

//**************************************************************************** 
// 함수  :  toggleImageClasses()
// 요약  : 꼼수지만 총 6개의 사진의 클래스가 돌아가면서 반복되는 패턴 만들어주기
//**************************************************************************** 

const container = document.getElementById('container');
const images = document.getElementsByClassName('img2');

function toggleImageClasses() {
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('slide-in1')) {
      images[i].classList.remove('slide-in1');
      images[i].classList.add('slide-in');
    } else if (images[i].classList.contains('slide-in')) {
      images[i].classList.remove('slide-in');
      images[i].classList.add('slide-in2');
    } else if (images[i].classList.contains('slide-in2')) {
      images[i].classList.remove('slide-in2');
      images[i].classList.add('expanded');
    } else if (images[i].classList.contains('expanded')) {
      images[i].classList.remove('expanded');
      images[i].classList.add('slide-out');
    } else if (images[i].classList.contains('slide-out')) {
      images[i].classList.remove('slide-out');
      images[i].classList.add('slide-out-move');
    } else if (images[i].classList.contains('slide-out-move')) {
      images[i].classList.remove('slide-out-move');
      images[i].classList.add('slide-in1');
    }
  }
}
container.addEventListener('click', toggleImageClasses); // 클릭 시 호출
setInterval(toggleImageClasses, 3000); // 3초 간격으로 자동 호출

//**************************************************************************** 
// 함수  : img_change(list)
// 요약  : 장르별 이미지 클릭시 변화되는 메인 베너 꾸미기
//**************************************************************************** 

const contect_list=[]
const romens_list=['main2-1','main2-2','main2-6','main2-4','main2-5','main2-6']
const bl_list=['main3-1','main3-2','main3-3','main3-4','main3-5','main3-6']


function img_change(list){
  const imges = document.getElementsByClassName('img2')

  list.forEach((img,i) => {
    console.log(imges[i])
    console.log(list[i])
    imges[i].src="./img/"+list[i] +".webp"
    
  })

}

 document.getElementsByClassName('search')[0].addEventListener('click', () => {.classList.add('clicked')})